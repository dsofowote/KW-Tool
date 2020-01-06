integration.meta = {
    'sectionID' : '129990',
    'siteName' : 'AAStocks - (CN Site) - Desktop - ( CN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1240,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#topPanel').css({'max-width':'1240px', 'margin':'0 auto'});
    }
});