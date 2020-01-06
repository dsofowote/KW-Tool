integration.meta = {
	'sectionID' : '125625',
	'siteName' : 'What Hifi',
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1420]
};




integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707504',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1160,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'tip-region, block-hcm-external-blocks-mpu-flexible1, block-hcm-external-blocks-mpu-flexible2, block-hcm-external-blocks-mpu-flexible3',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 65
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		if ($("#trending").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#trending");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -100,
			});
		} else if ($("#trending").length == 0) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('#footer-links, #footer-wrapper').css({
			'max-width' : '1160px',
			'margin' : '0 auto'
		});
		$("head").append('<style>#tip-region{display: none !important;} #page{padding-top: 0 !important;}</style>');
	}

});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();0
	if (width < 1500 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$("head").append('<style>#feedbackify .fby-tab-r{right: ' + (sideWidth - 87) + 'px !important;}</style>');
	} else {
		$("head").append('<style>#feedbackify .fby-tab-r{right: 0px !important;}</style>');
	}
}

integration.on('adServed', function(e) {
	$("#header").css({
		"z-index" : "999999"
	});
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
	$("head").append('<style> body #feedbackify, body #feedbackify #fby-screen {z-index : 9999 !important;} #newsletter-prompt.bottom-right{right: 370px !important; box-shadow: none !important;} </style>');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/8527/HCM_Passbacks/CE_Passbacks', [970, 250]).display();\n<\\script>";
};
