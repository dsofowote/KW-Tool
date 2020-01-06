integration.meta = {
    'sectionID' : '129737',
    'siteName' : 'Who - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087169',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1272,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("head").append("<style>.Navbar--sticky, .BCF-Wrapper, .Header , .VideoWatch-Driver-Wrapper{width: 1272px !important; margin: 0 auto; left: 0 !important; right: 0 !important;}</style>");
      $('.Header.home, .Navbar--sticky, #leaderboard_sticky').css({
        "width" : "1272px",
        "margin" : "0 auto"
      });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("head").append("<style>.Navbar--sticky, .BCF-Wrapper, .VideoWatch-Driver-Wrapper{margin: 0;}</style>");
            $('.Header.home, .Navbar--sticky, #leaderboard_sticky').css({
              "margin" : "0"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/60035833/PAC/WHO)', [[1,1]])\n  .setTargeting('passback', ['inskin'])\n  .setTargeting('position', ['2'])\n  .setTargeting('pagenumber', ['1'])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n  <\\script>";
};