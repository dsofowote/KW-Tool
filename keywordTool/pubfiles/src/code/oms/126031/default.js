integration.meta = {
   'sectionID' : '126031',
   'siteName' : 'MainPost',

   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706494',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 990,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_FastInit": true

};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#ad_skyscraper, #ad_superbanner").hide();
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("#off-canvas-wrap").css({
         	"margin-left" : "0"
         });
      }
   }
});
