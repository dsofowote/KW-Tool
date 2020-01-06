integration.meta = {
	"sectionID" : "125185",
	"siteName" : "Finanzas",
	"publisher" : "vocento",
	"platform" : "desktop"
};

integration.telemetry.setup({       
   'url': true,             
   'ad-served': true,        
   'base-ready': true,      
   'ad-call-response': true, 
   'ad-call': true,          
   'failed-test': true,      
   'impression': true,       
   'custom': true           
});

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706416',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_FastInit" : true,
	"plr_HideElementsByClass" : "ad, publicity"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".container").css({
			"top" : "10px"
		});
	}
});
