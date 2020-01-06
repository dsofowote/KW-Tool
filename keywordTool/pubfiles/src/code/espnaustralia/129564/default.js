integration.meta = {
    'sectionID' : '129564',
    'siteName' : 'ESPN Cricinfo - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085466',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
  	'plr_ForceFrameBottom' : 0,
  	"plr_FastInit" : true
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
});

/* Passback Tag */
window.ISMPassback = function() {
    return "  <script src='https://www.googletagservices.com/tag/js/gpt.js'>\n    googletag.pubads().definePassback('/21783347309/espn.global/inskins_passback', [970, 250]).set(\"page_url\", \"%%PATTERN:url%%\").display();\n  <\\script>";
};