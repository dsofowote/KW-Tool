integration.meta = {
   'sectionID' : '127391',
   'siteName' : 'Tête à modeler - Tablet - FR',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '731270',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1070,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
        $("#main, header .content, #hook-bottom, #hook-legals").css({
            "margin-left" : "0px"
        });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
