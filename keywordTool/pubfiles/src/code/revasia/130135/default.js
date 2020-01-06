integration.meta = {
    'sectionID' : '130135',
    'siteName' : 'Mashable Asia - Desktop - ( HK ID MY PH SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('.billboard').css({'display':'none'});
        $('.wrapper, footer , .footer').css({'max-width':'1320px', 'margin':'0 auto'});
    }
});