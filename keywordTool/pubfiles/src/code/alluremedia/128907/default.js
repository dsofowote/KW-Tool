integration.meta = {
    'sectionID' : '128907',
    'siteName' : 'Mydomainehome - Tablet - (AUS) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040971',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1030,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".top-slot-container, .sticky-container .article-list-wrapper, .full-bleed-container, .homepage-widget, .article-wrapper").css({
            "margin" : "0 auto",
            "width" : "1000px",
          });
          $(".article-wrapper").css({
            "padding-top" : "15px",
            "float" : "none"
          });
          $("html").css({
            "overflow-x" : "hidden"
          });
          $("head").append("<style type='text/css'> .container-fluid {margin: 0 auto !important; width: 1000px !important;}</style>");
     
          integration._addPixel();

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".top-slot-container, .sticky-container .article-list-wrapper, .full-bleed-container, .homepage-widget, .article-wrapper").css({
                "margin" : "0"
              });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/1027487/mydomaine', [-1, -1]).display();<\\script>";
};