integration.meta = {
   'sectionID' : '126137',
   'siteName' : 'Celebs Now - Tablet - NON UK',

   'platform' : 'tablet',
   'restrictions' : ''
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '706889',
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
