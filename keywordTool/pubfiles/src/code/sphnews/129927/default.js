integration.meta = {
    'sectionID' : '129927',
    'siteName' : 'Zaobao.com  - Desktop - ( CN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1097556',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("header, footer, #brand").css({"margin": "0 auto", "max-width": "1080px"});
        $('head').append('<style type="text/css">.navbar-static-top {max-width: 1080px; margin: 0 auto !important}</style>');
        $('head').append('<style type="text/css">.container {max-width: 1080px !important}</style>');
    }
});
