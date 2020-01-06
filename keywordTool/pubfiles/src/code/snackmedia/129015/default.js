integration.meta = {
    'sectionID' : '129015',
    'siteName' : 'RugbyOnslaught- Tablet - (INT)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045468',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1284,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".header-games").outerHeight() + $(".main-nav").outerHeight();
      var scrollPanelHeight = $(".header-games").outerHeight();
      if ($("#template > header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#template > header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -scrollPanelHeight
            });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            var windowWidth = $(window).width();
            $("#content .container, .menu-header-ad").css({
              "max-width" : "1284px",
              "margin-left" : "0",
              "padding" : "0px"
            });
            $("body, #template").css({
              "overflow" : "visible"
            });
            $("header").css({
              "left" : "-20px",
              "width" : "1604px"
            });
        }
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script> (function (w, t, d, s) {\n\td = w.document;\n\tw.ggv2id = t;\n\ts = d.createElement('script');\n\ts.async = true;\n\ts.src = 'https://js.gumgum.com/services.js';\n\td.getElementsByTagName('head')[0].appendChild(s);\n}(top, '8f437fc5')); <\\script>";
};
