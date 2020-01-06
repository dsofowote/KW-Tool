integration.meta = {
    'sectionID' : '129018',
    'siteName' : 'Rugby365 - Tablet - INT  ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045471',
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
          var headHeight = $("header").outerHeight();
          if ($("header").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter("header");
              integration.base.setCfg({
                  plr_AnchorParent: "#inskinanchor",
                  plr_StartScrollOnAnchor: true,
                  plr_PageHeightAdjustment: -headHeight - 60
              });
          }

          $("#content").css({
              "max-width": "1320px",
              "margin": "0 auto",
              "overflow" : "visible"
          });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("footer > .container, #content").css({
                "margin": "0"
            });
            $("header").css({
                "margin-left": "-20px"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'4d3a4501'));<\\script>";
};
