integration.meta = {
    'sectionID' : '129167',
    'siteName' : 'Bike Sport News - Desktop - ( INT )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1061118',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/16259\"><\\script>";
};
