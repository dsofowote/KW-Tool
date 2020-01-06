integration.meta = {
    'sectionID' : '130009',
    'siteName' : 'Fanpiece - Desktop - (HK) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1305]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1100319',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1045,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#navigation-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#navigation-wrapper");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -69,
                plr_ScrollAdjustment : 140
			});
        }
        $("#content").css({"z-index": "9"});
        $("#button-side-previous, #button-side-next").css({"top": "650px"});
        $("#highlight").parent().css({"margin": "0 auto", "max-width": "1045px"});
        $("#lifestyle-magazine-navigation").css({"margin": "0 auto", "max-width": "1045px"});
        $("#footer").css({"margin": "0 auto", "max-width": "1045px"});
    }
});
