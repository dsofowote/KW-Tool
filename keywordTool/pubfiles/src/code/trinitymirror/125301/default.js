integration.meta = {
  "sectionID": "125301",
  "siteName": "Mirror Daily Post",
  "publisher": "mirror",
  "platform": "tablet"
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '706677',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 970,
  "plr_URLKeywords" : 1,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#page").css("margin-top", "0px");
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $('#page').css('margin-left', '0px');
      integration.base.setCfg({
        plr_PageAlignment: 'left'
      });
    }
  }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script>\n  try {\n    PageSkinFallback();\n  } catch (e) {};\n  <\\script>";
};