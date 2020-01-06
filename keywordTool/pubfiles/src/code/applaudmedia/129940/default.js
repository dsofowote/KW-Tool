integration.meta = {
    'sectionID' : '129940',
    'siteName' : 'US Lovemoney - Desktop - ( US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1332]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1072,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1072)/2;
      $('#header-module, .page-nav__wrapper, .header, .footer').css({
        'max-width' : '1072px',
        'margin' : '0 auto'
      });
      $('html').css({
        'background' : 'url(../images/bg.jpg)'
      });
      $("head").append('<style>.to-top{left: ' + sideWidth + 'px !important;} </style>');
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".to-top").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".to-top").css({
            "margin-bottom" : "0"
        });
    }
}
