integration.meta = {
    'sectionID' : '128700',
    'siteName' : ' Zero Hanger - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1030959',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".td-header-wrap").length == 1) {
                    $("<div id='inskinanchor'></div>").insertAfter(".td-header-wrap");
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",
                        plr_PageHeightAdjustment : -190
                    });
		}

        $(".td-main-content-wrap").css({
            "max-width" : "1080px",
            "margin" : "0 auto",
            "padding-top" : "30px"
        });

        $("#td-outer-wrap").css({
            "overflow" : "visible"
        });

        $(".td-header-sp-recs").hide();
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/135062774/zerohanger', [728, 90]).display();\n<\\script>";
};

