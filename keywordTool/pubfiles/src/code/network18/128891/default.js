integration.meta = {
    'sectionID' : '128891',
    'siteName' : 'Money Control - Desktop - (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040894',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1280)/2;
      var headHeight = $('header').outerHeight();
      $('footer').css({
        'max-width' : '1280px',
        'margin' : '0 auto'
      });
      $('footer').css({
        'margin-top' : '20px',
      });
      $('.scroll-paginate').css({
        'max-width' : '1237px',
        'left' : sideWidth
      });
      $('.f-menulist, .f-menulist-in').css({
        'right' : sideWidth
      });
      $('#scroll').css({
        'z-index' : '4',
        'right' : sideWidth + 15
      });
      $('.share_arti_srevamp').css({
        'top' : '50%'
      });
      $('.live-blog .share_arti_srevamp, .share_arti_srevamp').css({
        'left' : sideWidth + 15
      });
      if ($("header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("header");
        integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment : -headHeight,
            plr_ScrollAdjustment : -headHeight
        });
    }
    }
});
