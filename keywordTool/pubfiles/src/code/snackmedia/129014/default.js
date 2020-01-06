integration.meta = {
    'sectionID' : '129014',
    'siteName' : 'RugbyOnslaught- Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045467',
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
      var headHeight = $(".category-container").outerHeight() + $(".main-nav").outerHeight();
      var scrollPanelHeight = $(".category-container").outerHeight();
      if ($("#template > header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#template > header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -scrollPanelHeight
            });
        }
        $("body, #template").css({
          "overflow" : "visible"
        });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script> (function (w, t, d, s) {\n\td = w.document;\n\tw.ggv2id = t;\n\ts = d.createElement('script');\n\ts.async = true;\n\ts.src = 'https://js.gumgum.com/services.js';\n\td.getElementsByTagName('head')[0].appendChild(s);\n}(top, '8f437fc5')); <\\script>";
};