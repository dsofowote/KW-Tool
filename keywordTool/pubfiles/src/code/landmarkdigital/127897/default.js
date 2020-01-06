integration.meta = {
   'sectionID' : '127897',
   'siteName' : 'Breaking News - IE - Tablet - (IE UK) ',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '920746',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
   'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("#shareSidebar").css({
             "left" : "15px",
             "z-index" : "1000"
         });
      }
   }
});

integration.on('adServed', function(e) {
	if (e.data.hasSkin) {
	}
});
