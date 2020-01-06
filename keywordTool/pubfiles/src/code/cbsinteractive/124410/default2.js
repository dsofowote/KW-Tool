integration.meta = {
  "sectionID": "124410",
  "siteName": "TV.com",
  "publisher": "cbs",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
  'mf_siteId': '681737',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 986,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {

    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

      $('#mantle_skin, #header_bar').css({
        'width': '986px',
        'margin-left': '0px'
      });
      integration.base.setCfg({
        plr_PageAlignment: 'left'
      });
    }
  }
});

integration.on("adServed", function(e) {
  $('.tv_footer').css('margin', '0 auto');
  $('#InSkinFrameLeft_myTabletSkin').css('z-index', 3);
  $('#InSkinFrameRight_myTabletSkin').css('z-index', 3);
  $('.ism-frame').css('z-index', '3');

});
