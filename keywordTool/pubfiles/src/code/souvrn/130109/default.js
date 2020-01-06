integration.meta = {
    'sectionID' : '130109',
    'siteName' : ' BFI - (WHATS ON) - Desktop - (INT) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

function setWindow() {
    return currentWindow.top;
   }

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1103756',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#customer-utilities").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#customer-utilities");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
        }
        $("#page_top, #region-footer, .footer").css({"margin": "0 auto", "max-width": "1170px"});
        $("body>.footer").css({"position": "relative"});
    }
});
