integration.meta = {
   'sectionID' : '127275',
   'siteName' : '8Days - Tablet - (Asia)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '713734',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   //.hidden-xs, .main-header, .section.section__first, .fixed-menu, .image-header-section
	   $('body, .main-header .section__content, .section.main-header.fixed-menu').css({
		    "max-width" : "1024px",
		    "margin" : "0 auto"
		});
	   $('head').append('<style type="text/css">body > section.section.main-header.fixed-menu {max-width: 1024px; margin: 0 auto;}</style>');
	   
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('head').append('<style type="text/css">body > section.section.main-header.fixed-menu {margin-left: 20px;}</style>');
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
