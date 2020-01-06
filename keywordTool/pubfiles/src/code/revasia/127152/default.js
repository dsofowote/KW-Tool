integration.meta = {
	'sectionID' : '127152',
	'siteName' : 'RojakLah - Mobile - (Asia)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706995',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#leaderboard").css({
			"height" : "0px"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	console.log(integration.custom.FrameSideRight);
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
	$('head').append('<style type="text/css">.at-share-dock.atss {max-width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}</style>');
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("#at-share-dock").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#at-share-dock").css({
			"margin-bottom" : "0"
		});
	}
}

integration.on('adServed', function(e) {
	var headheight1 = $('header').outerHeight();
	var headheight2 = $('nav.main-nav').outerHeight();
	var headheight = headheight1 + headheight2
	$(".ism-frame").parent().css({
		"top" : headheight + 20
	});

	$("#back-top").css({
		"right" : integration.custom.FrameSideRight
	});
}); 