integration.meta = {
    'sectionID' : '128724',
    'siteName' : 'Big Footy - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1032889',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#content, #header, #loginBar, .footer, .footerLegal, .td-header-wrap, .wpb_wrapper, #td-outer-wrap, .td-container, .p-pageWrapper, .p-body-inner").css({
          "max-width" : "1024px",
          "margin" : "0 auto"
      });
      $(".p-nav, .p-sectionLinks").css({"max-width" : "100%"});
      $("#header").css({"left" : "0px", "right" : "0px"});
      $(".td-pb-row").css({"margin-left" : "0px", "margin-right" : "0px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $("#content, #header, #loginBar, .footer, .footerLegal, .td-header-wrap, .wpb_wrapper, #td-outer-wrap, .td-container, .p-pageWrapper, .p-body-inner").css({
              "margin-left" : "0"
          });
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }


    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/159808630/bigfooty.gum-gum.passback', [728, 90]).display();\n<\\script>";
};

