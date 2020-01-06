integration.meta = {
    'sectionID' : '129478',
    'siteName' : ' Boerse am Sonntag - Desktop - (DE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1305]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1080200',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 985,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#Ads_BA_BS').css({'display':'none'})
    }
});
