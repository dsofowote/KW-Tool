integration.meta = {
  "sectionID": "125174",
  "siteName": "Fashiontime",
  "publisher": "bestseller",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706465',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1060,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      integration.base.setCfg({
        'plr_PageAlignment' : 'left'
      });
      $('.ftv3-wrapper').css({
        'margin-left' : '0px'
      });
      $('html, body').css({
        'width' : 'inherit'
      });
      $("head").append("<style> .best24{ left: 810px !important; }</style>");
      
    }
  }
});
