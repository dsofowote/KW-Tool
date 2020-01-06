integration.meta = {
  'sectionID': '129389',
  'siteName': 'Serious About Rugby League - Tablet - (INT) ',
  'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId' : '1076112',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1100,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    var windowWidth = 1100;


    $(".menu-drop").css({"display": "block"});
    $("#slider").css({"min-width": windowWidth});
    $("#content").css({"min-width": windowWidth});
    $(".owl-item").css({"height": "590px"});



    if ($("#header").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("#header");
      integration.base.setCfg({
        plr_AnchorParent: "#inskinanchor"
      });
    }
    $(".page-wrapper, #header").css({"margin": "0 auto", "max-width": windowWidth});
    $("#slider").css({"margin-top": "0px"});
    $("#menu").css({"z-index": "5", "left": "130px", "width": "25%"});
    $("#content").css({"width": "70%"});
    if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
      $(".page-wrapper, #header").css({"margin-left": "0"});
      $("#menu").css({"left": "20px"});
      integration.base.setCfg({
        'plr_PageAlignment': 'left'
      });
    }
  }
});

integration.on('adServed', function(){
  var headerHeight = $(".ism-frame:nth-of-type(1)").outerHeight() + 55
  $("#menu").css({"top": headerHeight});
  $( document ).scroll(function() {
      var topMenu = headerHeight - $(document).scrollTop();
      if (topMenu > 55) {
          $("#menu").css({"top": topMenu});
      } else {
          $("#menu").css({"top": "55px"});
        }
  });
  $("#inskinanchor").css({
      "margin-top" : "55px"
  });
});
