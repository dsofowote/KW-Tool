integration.meta = {
    'sectionID' : '129514',
    'siteName' : 'ESPN - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085423',
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
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("head").append("<style>#global-viewport #pane-main{width: 1240px !important;}</style>");
            $("head").append("<style>#fittPageContainer{width: 1240px !important;}</style>");
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
})

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\"> googletag.pubads().definePassback(\n\n\"/21783347309/espn.uk/inskins_passback\", [728, 90]).set(\"page_url\", \"%%PATTERN:url%%\").display();\n\n<\\script>";
};
