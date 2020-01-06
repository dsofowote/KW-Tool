integration.meta = {
    'sectionID' : '128906',
    'siteName' : 'Lifehacker - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040970',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('header .site-header--fixed, .leaderboard-container, .page-wrapper, .top-stories-container, .container, .site-footer__content, .site-footer__bottom').css({
        'max-width' : '1024px',
        'margin' : '0 auto'
      });
      $('header .site-header--fixed').css({
        'left' : '0px',
        'right' : '0px'
      });
      $('body').append('<style>.side-menu-active {max-width: 1068px;}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('header .site-header--fixed, .leaderboard-container, .page-wrapper, .top-stories-container, .container').css({
              'margin' : '0'
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n       googletag.defineOutOfPageSlot('/1027487/lifehacker', 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'lifehacker.com.au');\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};