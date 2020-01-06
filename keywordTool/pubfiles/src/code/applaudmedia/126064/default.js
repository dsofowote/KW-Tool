integration.meta = {
  "sectionID": "126064",
  "siteName": "Babynames.co.uk",
  "publisher": "theinternetworks",
  "platform": "desktop"
};




integration.testParams = {
	'desktop_resolution' : [ 1278 ]
};

integration.params = {
	
	'mf_siteId' : '706786',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1018,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=div-gpt-ad-]",
  "plr_HideElementsByClass": "",
  'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#container").css({
    	"marginTop" : "10px",
    	"marginBottom" : "10px"
    });
  }
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"http://uk.ads.justpremium.com/adserve/js.php?zone=40415\">\n<\\script>";
};