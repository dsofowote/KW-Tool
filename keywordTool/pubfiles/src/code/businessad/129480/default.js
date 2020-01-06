integration.meta = {
    'sectionID' : '129480',
    'siteName' : 'Finanztreff - Desktop - (DE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080202',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.mainContainer').css({'margin':'0 auto', 'margin-top':'10px'});
      $('.adSpacer').css({'display':'none'});
    }
});
