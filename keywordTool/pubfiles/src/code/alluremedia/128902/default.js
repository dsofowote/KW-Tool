integration.meta = {
    'sectionID' : '128902',
    'siteName' : 'Pop Sugar - Tablet - ( AU )',
    'platform' : 'tablet'
};

function setWindow() {
  return currentWindow.top;
}

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040966',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1068,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
      if (e.data.hasSkin) {
        $('#top-nav, #fixednav, .feature-section, .body-container').css({
          'max-width' : '1068px',
          'margin' : '0 auto'
        });
        $('body').append('<style>.side-menu-active {max-width: 1068px;}</style>');

      if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          /* Pageskin Edge specific changes */
          integration.base.setCfg({
            'plr_PageAlignment' : 'left' ,
  			});

        $('.body-container').css({  'margin-left' : '0px'});
        $('.sidebar-hidden ').css({
          'position' : 'static'
        });
      }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback'>\n<script>\n   window.googletag = window.googletag || {cmd: []};\n     googletag.cmd.push(function() {\n\n       googletag.defineOutOfPageSlot('/1027487/popsugar', 'gpt-passback')\n         .addService(googletag.pubads());\n       googletag.pubads().setTargeting('Passback', ['true']);\ngoogletag.pubads().set('page_url', 'popsugar.com.au');\n\n       googletag.enableServices();\n       googletag.display('gpt-passback');\n   });\n<\\script>\n</div>";
};
