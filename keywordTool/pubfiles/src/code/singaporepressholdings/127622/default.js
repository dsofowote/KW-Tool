integration.meta = {
	'sectionID' : '127622',
	'siteName' : 'The Peak - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768229',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1060,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#baltimore-optin").css({
			"width" : "1060px",
			"margin" : "0 auto"
		});
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
	}
});
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	$(window).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1445 || integration.custom.isSuper) {
		var sideWidth = (width - 1060) / 2;
		$("#cb-to-top").css({
			"right" : sideWidth + 20
		});
	} else {
		$("#cb-to-top").css({
			"right" : "10px"
		});
	}
}

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("#baltimore-optin").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#baltimore-optin").css({
			"margin-bottom" : "0"
		});
	}
}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000000"
	});
});
