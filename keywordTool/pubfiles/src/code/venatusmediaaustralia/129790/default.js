integration.meta = {
    'sectionID' : '129790',
    'siteName' : 'What Culture - Tablet - (NZ)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088416',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($("#app-header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#app-header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          plr_ScrollAdjustment : -20
        });
      }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $('head').append('<style type="text/css">.app-page {margin-left :0px !important;}</style>');
          $(".background-overlap, .app-footer").css({"max-width": "1000px", "margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("adServed", function(e) {
	    $(".ism-frame").parent().css({"z-index" : "9999999"});
});
