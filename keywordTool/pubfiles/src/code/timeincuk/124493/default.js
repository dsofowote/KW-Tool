integration.meta = {
	"sectionID" : "124493",
	"siteName" : "Celebs Now",
	"publisher" : "timeinc",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {


	'mf_siteId' : '706226',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$('#wrapper').css('margin-left', '0px');
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			})
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
