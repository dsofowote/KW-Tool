integration.meta = {
   'sectionID' : '126830',
   'siteName' : 'Irish Independent Regionals - Tablet - (IE)',
   'platform' : 'tablet'
};

integration.telemetry.setup({
	'url': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'window-load': true,
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707989',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 970,
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
         $('#root, body > div.outer-wrap').css({
        	'width' : '970px',
        	'margin-left' : '0px'
         });
         $('#persistent, #inner > nav').css({
        	'width' : '970px',
         	'margin-left' : '0px',
         	'left' : '20px'
         }); 
      }
   }
});

