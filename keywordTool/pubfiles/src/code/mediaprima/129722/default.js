integration.meta = {
    'sectionID' : '129722',
    'siteName' : 'Berita Harian - (Creative Appr.) - Tablet - ( MY )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086936',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
      $('body').append('<style>.ins-backtotop{right:'+ integration.custom.PageSkinFrameSide +'px !important}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
         $('#navbar, .top-container, .top-left-right-container, .main-container, #bottom, #footer, .sticky-navbar ').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
        $('body').append('<style>.sticky-navbar{max-width: 1170px !important}</style>');

        }
    }
});

integration.on("adServed", function(e) {
  $(".ism-frame").parent().css({"z-index" : "100000000"});
  var headHeight = $('.sticky-navbar').height();
  integration.base.setCfg({
        plr_ScrollAdjustment : headHeight
    })
  });
