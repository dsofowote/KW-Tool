integration.meta = {
    'sectionID' : '130217',
    'siteName' : 'Corriere - Desktop - (IT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1110983',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".bck-navbar.is--fixed-top").height();
      if ($(".bck-navbar.is--fixed-top").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".bck-navbar.is--fixed-top");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
      $('body').css({
        'padding-top' : '0px'
      });
    }
});
