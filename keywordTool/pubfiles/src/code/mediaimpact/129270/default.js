integration.meta = {
    'sectionID' : '129270',
    'siteName' : 'Transfermarkt - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1354]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1069879',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1034,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#navibalken').css({'max-width':'1034px', 'margin':'0 auto', 'right':'0px'});
      $('#werbung_superbanner').css({'display':'none'});      
    }
});
