integration.meta = {
   'sectionID' : '124325',
   'siteName' : 'Ad Ops PageSkin Tablet - DO NOT USE',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706085',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 968,
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
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
