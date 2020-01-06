integration.meta = {
    'sectionID' : '129497',
    'siteName' : 'Geissblog Koeln - Desktop - (DE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082496',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.gb_ad_top_wrapped').css({'display':'none'});
    }
});