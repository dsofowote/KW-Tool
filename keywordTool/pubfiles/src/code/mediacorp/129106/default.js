integration.meta = {
    'sectionID' : '129106',
    'siteName' : 'CNA Lifestyle - Desktop - (SG)',
    'platform' : ''
};

integration.testParams = {
  'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055494',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_PageAlignment' : 'center',
    "plr_ContentW" : 1170,
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#app, .container-fluid').css({'max-width':'1170px', 'margin':'0 auto'});
      $('.region3d ').css({'left':'5px'});
    }
});
