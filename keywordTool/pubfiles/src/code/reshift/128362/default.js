integration.meta = {
	'sectionID' : '128362',
	'siteName' : 'Computertotaal  - Tablet - ( NL )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1005989',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.nav-site').outerHeight();

		if ($("#banner--0").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#banner--0");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true,
				plr_PageHeightAdjustment : -headerHeight
			});
		}

		$(".dt-dfppixel").css({
			"display" : "none"
		});

		$(".site__footer, footer").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});

		$("head").append("<style>#banner--0{display: none !important;}</style>");

		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".siteWrapper, main, .site__footer, footer").css({
				"margin" : "0"
			});
			$(".nav-site").css({
				"margin-left" : "-20px"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade id='glade-aslot-1'\n\n      data-ad-unit-path='/116488029/Computertotaal.nl_Retour_INSKIN'\n\n      width='728' height='90'\n\n      data-click-url='%%CLICK_URL_UNESC%%'></div>\n\n<script async src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
