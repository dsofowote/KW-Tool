integration.meta = {
    'sectionID' : '128632',
    'siteName' : 'OK Salute - Desktop - (IT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027836',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        
        $(".td-header-wrap.td-header-style-10, .td-footer-wrapper.td-container-wrap, .td-header-menu-wrap.td-header-gradient.td-affix").css({
            "max-width" : "1180px",
            "margin" : "0 auto"
        });
    }
});
