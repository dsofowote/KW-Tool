integration.meta = {
  "sectionID": "125300",
  "siteName": "Mirror Daily Post",
  "publisher": "mirror",
  "platform": "desktop"
};




integration.testParams = {
  "desktop_resolution": [1230]
};

integration.params = {
	'mf_siteId' : '706584',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 970,
  "plr_URLKeywords" : 1,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "div-gpt-ad-bottom-lb, div-gpt-ad-top-mpu"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#page").css("margin-top", "0px");
  }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script>\n  try {\n    PageSkinFallback();\n  } catch (e) {};\n  <\\script>";
};