integration.meta = {
    'sectionID' : '129513',
    'siteName' : 'ESPN -Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085422',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.height = $("#header-wrapper").height();
		$(".ad-banner-wrapper, .ad-slot-banner").hide();
		if ($("body > #global-viewport > #header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-container");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				'plr_PageHeightAdjustment' : -integration.custom.height
			});
		} else if ($("#fittPageContainer").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#fittPageContainer");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
                'plr_PageHeightAdjustment' : -65,
                'plr_ScrollAdjustment' : -65
			});
        }
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000055"
	});
	$(".Site__Header__Wrapper").css({
		"z-index" : "1000064"
	});
});


/* Passback Tag */
window.ISMPassback = function() {
    return "  <script src='https://www.googletagservices.com/tag/js/gpt.js'>\n    googletag.pubads().definePassback('/21783347309/espn.global/inskins_passback', [970, 250]).set(\"page_url\", \"%%PATTERN:url%%\").display();\n  <\\script>";
};