integration.meta = {
   'sectionID' : '124548',
   'siteName' : 'Jessica - Desktop - (HK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1340]
};

integration.params = {
	'mf_siteId' : '707527',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1080,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_URLKeywords" : 2
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body, html").css({
      "height": "auto",
      "overflow-x": "visible"
    });    
    $(".sticky-wrapper header").css({
    	"top" : "0px"
    });    
    $("#page, #header").css({
    	"max-width" : "1080px",
    	"margin" : "0 auto"
    });
  }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "�<div data-glade data-ad-unit-path=\"/117295781/Inskin_JESSICA(Desktop)\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};
