integration.meta = {
    'sectionID' : '130224',
    'siteName' : 'Mundo Deportivo - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1111347',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1010,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".esi-new-header .mdheader, .section-block, .mdnavbar").css({
            "margin": "0 auto",
            "max-width": "1010px"
        });
        $("head").append("<style>.esi-new-header .mdheader.fixed .mdnavbar{width: 1010px; margin: 0 auto; left: 0; right: 0;}</style>");
    }
});