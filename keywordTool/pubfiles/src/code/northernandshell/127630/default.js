integration.meta = {
   'sectionID' : '127630',
   'siteName' : 'OK - Smartphone - (Asia)',
   'platform' : 'smartphone'
};

/* Always disable the telemetry server & KW filters for Bauer or Northern and Shell Integrations */
integration.disableTelemetry = true;

integration.disableKWFilters = true;

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '768487',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#container").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#container");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -48
			});
		}
		$("#inskinanchor").css({
			"margin-top" : "48px"
		});
		$("#body").css({
			"padding-top" : "0px"
		});
		$(".article-body>p>img.articleSubImg.embeds-image").css({
			"width" : "100%",
			"margin-left" : "0px"
		});
		$(".promoted-body p, .article-body p").css({
			"padding" : "0px"
		});
		$("#header-mobile").css({
			"z-index" : "100"
		});
		$("head").append("<style>.disablePage{z-index: 100 !important; overflow: visible !important;}</style>");
	}

});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
