integration.meta = {
	"sectionID" : "125182",
	"siteName" : "Mujerhoy",
	"publisher" : "vocento",
	"platform" : "tablet"
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

integration.testParams = {};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1002,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".principal-publi-right").css("width", "auto");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#aspnetForm").css({
				"max-width" : "1002px"
			});
		}
	}
});
