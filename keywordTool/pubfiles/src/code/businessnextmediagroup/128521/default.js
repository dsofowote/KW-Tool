integration.meta = {
  'sectionID' : '128521',
  'siteName' : 'ShoppingDesign  Taiwan -  - ( TW )',
  'platform' : ''
};

integration.testParams = {
'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
'mf_siteId' : '1024001',
'plr_ContentW' : 1140,
'plr_ContentType' : 'PAGESKINEXPRESS',
'plr_UseFullVersion' : true,
'plr_UseCreativeSettings' : true,
'plr_HideElementsByID' : '',
'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
if (e.data.hasSkin) {
  var width = $(window).width();
  var sideWidth = (width - 1000)/2;
  $(".my-main-top, .cc-grower").css({
    "width" : "1140px",
    "margin" : "0 auto"
  });
  $("head").append("<style> .fixed {width: 100% !important}</style>");

  $("html").css({"height": "auto"});

  integration.base.setCfg({
      plr_ScrollAdjustment : 50
  });


  if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
    integration.custom.isSuper = true;
    $(".my-nearby-box.my-right .nav-arrow").css({
      "right" : sideWidth
    });
    $(".my-nearby-box.my-left .nav-arrow").css({
      "left" : sideWidth
    });
  }
  $(".my-nearby-box .nav-arrow").css({
    "top" : "calc(50% + 164px)",
    "z-index" : "9999999"
  });
  $(".vertical .social-share-box").css({
    "margin-left" : "-204px",
    "z-index" : "9999999"
  });
}
});