integration.meta = {
    'sectionID' : '128975',
    'siteName' : 'Prinz.de - Tablet - ( AT CH DE )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044216',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var leftPanel = e.data.plr_FrameSide;
      $('.navbar').css({
        'width' : '1080px',
        'margin' : '0 auto'
      });
      $('.container').css({
        'margin' : '0 auto'
      });

      $("head").append("<style>.superbanner-wrapper{width:1080px !important; margin-left:auto !important; margin-right:auto !important; margin-top:14px !important;}</style>");
      $("head").append("<style>#urban-leaderboard-billboard div > iframe{position:relative !important; left:0px !important;}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('.container, .navbar, #urban-leaderboard-billboard, .leaderboard-wrap').css({
              'margin-left' : '0px'
            });
            $("head").append("<style>#PSAOuterWrapper, .navbar-fixed-top{left:" + leftPanel + "px !important;}</style>");
            $("head").append("<style>#PSAInnerWrapper{left:0% !important; margin-left:0px !important;}</style>");
            $("head").append("<style>#PSAOuterWrapper{margin-left:" + leftPanel + "px !important;}</style>");
        }
    }
});
