integration.meta = {
    'sectionID' : '129011',
    'siteName' : 'RugbyPass - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045464',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("header").height();
      var navHeight = $(".header-games").height();
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      integration.custom.FrameSide = e.data.plr_FrameSide;
      var sideWidth = ($(window).width() - $(".container").width())/2 + integration.custom.FrameSideRight ;
      $('#top-header-ad, .home-trending, .brightcove-playlist-section, .home-ad-section, .editors-pick-postcasts-social, .home-fixed-banner,.footer-row, #content').css({
        "max-width" : '1320px',
        "margin" : '0 auto'
      });
      $('body, #template').css({
        'overflow' : 'visible'
      });
      $("head").append("<style>.social-large.fixed{left: auto !important; right: " + sideWidth + "px !important;}</style>");
      if ($("header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(" header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          plr_PageHeightAdjustment : -headHeight,
            plr_ScrollAdjustment: -navHeight
        });
      }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'14ac3a73'));<\\script>";
};