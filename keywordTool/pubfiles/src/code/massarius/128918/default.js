integration.meta = {
    'sectionID' : '128918',
    'siteName' : 'Rijnmond - Desktop - ( NL )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1042338',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1200)/2;
      $(".site-top, .site-bottom").css({
          "width" : "1200px",
          "margin" : "0 auto"
      });
      $("head").append("<style>.wrapper-mainnav{width: 1200px; margin: 0 auto; left: 0; right: 0;}</style>");
      $("head").append('<style>.fixed-social-bar{right: ' + sideWidth + 'px;} </style>');
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".fixed-social-bar").css({
            "margin-top" : newheight
        });
    }else{
        $(".fixed-social-bar").css({
            "margin-top" : "0px"
        });
    }
}
