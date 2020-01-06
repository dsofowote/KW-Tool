integration.meta = {
    'sectionID' : '128871',
    'siteName' : 'Babyclub - Desktop - ( DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1039708',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : - 100
			});
        }
        $("#footer").css({"margin": "0 auto", "max-width": "960px"});
        $("head").append("<style>body {padding-top: 0px!important; background: #fff!important;} .adcontainer{display: none !important;}</style>");
    }
});

integration.on("adServed", function(e) {
    var headerHight = $("header").outerHeight();
    $(".ism-anchor").css({"top": headerHight});
});
