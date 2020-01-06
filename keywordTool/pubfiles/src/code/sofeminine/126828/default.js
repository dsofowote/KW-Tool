integration.meta = {
   'sectionID' : '126828',
   'siteName' : 'Au Feminin - Tablet - (FR)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708007',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1030,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      if ($("#header").length == 1) {
        $("<div id='inskinanchor'></div>").insertBefore("#header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor"
          // plr_PageHeightAdjustment : -navHeight,
        });
      }
      $("footer").css({"width": "1030px", "margin": "0 auto"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#content, footer, #header-content, #main-nav, #sub").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("layoutChange", function(e) {
  $("header").css({"top": "unset"});
      $(document).scroll(function() {
        var scrolltop = $(document).scrollTop();
        var topFrame = $(".ism-frame:nth-of-type(1)").outerHeight();
        var headerTop = topFrame - scrolltop;
        if (scrolltop > 0) {
          if (scrolltop > topFrame) {
              $("header").css({"top": ""});
            } else {
              $("header").css({"top": headerTop});
            }
        }  else {
          $("header").css({"top": "unset"});
        }
        });
});

integration.on("adServed", function(e) {
        $(".ism-anchor").css({"z-index": "9999999"});
});
