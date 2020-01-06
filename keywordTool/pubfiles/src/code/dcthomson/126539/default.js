integration.meta = {
	'sectionID' : '126539',
	'siteName' : 'Evening Express - (SSL) - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '706994',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	"plr_FastInit" : true

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body div.wrap').css({
				'margin' : '0px'
			});
		}
		integration.base.setCfg({
			plr_PageHeightAdjustment : -50,
		});

		$('div.sharedaddy').css({
			'position' : 'initial'
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ScrollBottom();
	$(window).scroll(function() {
		integration.custom.ScrollBottom();
	});
});

integration.custom.ScrollBottom = function() {
	if ($('body').hasClass('home') && $('header').hasClass('js-off')) {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : -100
		});
	} else if ($('body').hasClass('post-template-default') && $('header').hasClass('js-off')) {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : -48
		});
	} else {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : -32
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/evening-express-passbacks/EE-inskin_passbacks', [[2, 2], [300, 250], [970, 250]]).display();\n<\\script>";
};
