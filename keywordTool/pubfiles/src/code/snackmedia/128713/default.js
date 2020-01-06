integration.meta = {
    'sectionID' : '128713',
    'siteName' : 'Football Fancast - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1032751',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_GetContentHeightVersion' : 2,
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("head").append("<style>.billboard{display: none !important;}</style>");
     var width = $(window).width();
     var sideWidth = (width - 980)/2;
     integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
     $(".full-width").css({"max-width":"960px", "margin":"0 auto"});
     $(".footer").css({"max-width":"960px", "clear": "both", "float": "none", "margin": "auto" });
     $(".sf_tab").css({"margin-left":sideWidth});
     $("head").append("<style>.sf_unit.in {left:0 ; margin-left: 0 ;}</style>");
     $("head").append("<style>.sf_tab.in {left:0 ; margin-left:"+ sideWidth +";}</style>");
     $("head").append("<style>.wrapper.sf_in {left:0 ;}</style>");
     $('[src*="https://widgets.snack-projects.co.uk/tickers/5p0rtz/affiliateticker.html"]').wrap("<div class='frameWrapper'></div>");
     $("head").append("<style>.frameWrapper { z-index: 0!important; max-width:980px!important; position:fixed!important;}</style>");
    }
//    integration._addPixel();
});
integration.on('adServed', function (e){
  var headerHeight = ($(".header-inner").outerHeight());
  integration.base.setCfg({
    "plr_PageHeightAdjustment": -headerHeight
  })
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/InSkin-970x250', [[970, 250], [970, 90], [728, 90]]).display();\n<\\script>";
};
