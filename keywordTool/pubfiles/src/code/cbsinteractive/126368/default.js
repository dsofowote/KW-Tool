integration.meta = {
	'sectionID' : '126368',
	'siteName' : 'CBS News - Desktop - (EMEA)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706804',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -100
			});
		}
		$("head").append("<style>#dashboard{max-width: 1000px; margin: 0 auto; left: 0; right: 0;}</style>");
		$('#videoContainer, .site-footer').css({
			'max-width' : '1000px',
			'margin' : 'auto',
		});
		$('.row.col-12.article-video-player').css({
			'margin-right' : '40px'
		});
		$(".body-container").css({
			//"overflow-y" : "visible"
		});
		$("body").css({
			"margin-bottom" : "0"
		});
		$(".site-footer").css({
			"margin-bottom" : "140px"
		});
		$("body > div.body-container > header").css({
			"z-index" : "11"
		});

	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	integration.custom.ScrollAdjustment();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
		integration.custom.ScrollAdjustment();
	});
});
integration.custom.InSkinBottomNav = function() {
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var scrollTop = $(document).scrollTop();
	if (docHeight - integration.custom.PageSkinBottomPanel < winHeight + scrollTop) {
		var footerMargin = (winHeight + scrollTop + integration.custom.PageSkinBottomPanel ) - docHeight;
		$("#dashboard").css({
			"margin-bottom" : footerMargin
		});
	} else {
		$("#dashboard").css({
			"margin-bottom" : "0px"
		});
	}
};
integration.custom.ScrollAdjustment = function() {
	var scroll = $(document).scrollTop();
	if (scroll > 0) {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 100
		});
	} else {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 0
		});
	}
};
