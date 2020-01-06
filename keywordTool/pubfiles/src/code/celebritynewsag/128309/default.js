integration.meta = {
	'sectionID' : '128309',
	'siteName' : 'Promiflash - Tablet - ( AT CH DE )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1001836',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOX1iX_OX1iX_AKABBENBxoAAAAiCALgAUABYAFQALgAZABAADIAIkATgBPAEsAQgAwI'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {

			};
		};

		$("head").append("<style>.adColumnRight{display: none !important;}</style>");

		var headHeight = $("header.main").height();
		if ($("header.main").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 0
			});
		}
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>body div.background div.container{min-width: 100% !important; -ms-flex-pack: unset !important; justify-content: unset !important; -webkit-box-pack: unset !important;}</style>");
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/9265542/pf-web-desktop-list-display-ver-1', [[160, 600], [300, 600]]).display();\n<\\script>";
};
