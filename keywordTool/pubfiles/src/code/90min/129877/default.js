integration.meta = {
    'sectionID' : '129877',
    'siteName' : 'Mental Floss - Desktop - ( INT )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1640]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094631',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1380,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#page, #in-page, .footer-section").css({
        "float" : "none"
      });
      $("#studios-section, .footer-section-wrapper, #header-main-navbar, #navbar-dropdown-menu, #article-top-ad, #home_leaderboard_hero-desktop-0, #instagram-section, #homepage-top-leaderboard, .main-section .leaderboard-ad").css({
        "width" : "1380px",
        "margin-left" : "auto",
        "margin-right" : "auto"
      });
      $("#header-main-navbar, #home_leaderboard_hero-desktop-0, #navbar-dropdown-menu, #article-top-ad, #homepage-top-leaderboard, #hero-leaderboard-section").css({
        "left" : "0px",
        "right" : "0px"
      });
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
      $("#header-main-navbar, #article-top-ad").css({
          "margin-top" : newheight
      });
  }else{
      $("#header-main-navbar, #article-top-ad").css({
          "margin-top" : "0px"
      });
  }
}


/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'mentalfloss.com/Passback/1x1' ### Size: [[1,1]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/mentalfloss.com/Passback/1x1', [[1,1]]) .setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display(); <\\script>\n<!-- End -->";
};
