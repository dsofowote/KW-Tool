integration.meta = {
   'sectionID' : '124551',
   'siteName' : 'Marie Claire - Desktop - (HK)',
   'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1390]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707332',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1130,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_URLKeywords' : 2
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("header, footer, .view-content").css({
    	"max-width" : "1130px",
    	"margin" : "0 auto"
    });
  }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/117295781/InSkin_MC(Desktop)\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};