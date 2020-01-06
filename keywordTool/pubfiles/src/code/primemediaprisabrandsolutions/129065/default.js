integration.meta = {
    'sectionID' : '129065',
    'siteName' : ' El Comidista - Desktop - (ES) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047224',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.embed').css({'max-width':'990px', 'margin':'0 auto'});
    }
});
