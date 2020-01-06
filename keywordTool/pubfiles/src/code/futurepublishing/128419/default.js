integration.meta = {
	'sectionID' : '128419',
	'siteName' : 'What Hifi  - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1010943',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'tip-region, block-hcm-external-blocks-mpu-flexible1, block-hcm-external-blocks-mpu-flexible2, block-hcm-external-blocks-mpu-flexible3',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 0,
	'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		var navHeight = $('.primary-nav').height();
		if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight,
			});
		};
		$('#document-footer').css({
			'width' : '980px',
			'margin' : '0 auto'
		});
		$('#footer-links, #footer-wrapper').css({
			'max-width' : '1160px',
			'margin' : '0 auto'
		});
		$('.slot-lightbox1').css({
			'height' : '0px'
		});
		$("head").append('<style>.slot-leaderboard, #tip-region{display: none !important;} #page{padding-top: 0 !important;}</style>');
	}

});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1917 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;

		$("body").append('<style>#onesignal-bell-launcher{right: ' + sideWidth + 'px !important;}</style>');
		$("body").append('<style>#um_ultimedia_wrapper_wrap_widget_default .um_ultimedia_wrapper_videoWrapper iframe#um_ultimedia_wrapper_iframeUltimedia.visible_player{right: ' + sideWidth + 'px !important;}</style>');
	} else {
		// $("head").append('<style>#feedbackify .fby-tab-r{right: 0px !important;}</style>');
		$("body").append('<style>#onesignal-bell-launcher{right: ' + sideWidth + 'px !important;}</style>');
		$("body").append('<style>.visible_player{right: ' + sideWidth + 'px !important;}</style>');

	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/10518929/Passback_WhatHiFi/Inskin\", [728, 90]).display();\n<\\script>";
};
