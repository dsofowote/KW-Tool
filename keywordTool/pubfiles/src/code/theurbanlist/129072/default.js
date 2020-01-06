integration.meta = {
    'sectionID' : '129072',
    'siteName' : 'The Urban List - Tablet - ( AU NZ )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047522',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1080,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.FrameSide = e.data.plr_FrameSide;
      $(".primary-header").css({"max-width" : "1080px", "margin" : "auto"});
      $("head").append("<style> .left-off-canvas-menu {left : 130px!important; z-index : 1!important} .primary-footer {float : none} #content-container{position : relative!important}</style>");
      $("head").append("<style> .openshare-list {left : "+ (integration.custom.FrameSide) +"px!important; z-index : 1}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $("head").append("<style> .row, .page-home main[role=primary] {margin-left : 0!important;}</style>");
          $("head").append("<style> .left-off-canvas-menu {left : 0px!important} .primary-header {margin-left : 0!important}</style>");
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\\script>\n<div id='gpt-passback-300x250'>\n  <script>\n     window.googletag = window.googletag || {cmd: []};\n       googletag.cmd.push(function() {\n         googletag\n           .defineSlot('/21801723200/TUL/passback', [300, 250], 'gpt-passback-300x250')\n           .addService(googletag.pubads())\n           .setTargeting('pos', '1')\n           .setTargeting('passback', 'inskin');\n         googletag.pubads().set('page_url', window.location.href);\n         googletag.enableServices();\n         googletag.display('gpt-passback-300x250');\n     });\n  <\\script>\n</div>";
};