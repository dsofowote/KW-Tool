integration.meta = {
    'sectionID' : '126001',
    'siteName' : 'IGN Asia - (Creative Approval) - Tablet - ( ID MY PH SG TH VN )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706678',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom': 0,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".page-content").css({"max-width": "1096px", "margin": "0 auto"})
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $(".main").css({"max-width": "1096px", "margin-left": "0"})
          $(".page-content").css({"max-width": "1096px", "margin-left": "0"})
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
