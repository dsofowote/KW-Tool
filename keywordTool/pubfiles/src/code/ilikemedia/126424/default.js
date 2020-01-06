integration.meta = {
   'sectionID' : '126424',
   'siteName' : 'WhatCulture - Tablet - (UK)',
   'platform' : 'tablet'
};

function setWindow() {
	return currentWindow.top;
};


integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706859',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1010,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
	"plr_URLKeywords" : 1
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
		$('head').append('<style type="text/css">#layout-top {background: initial !important;} </style>');
		if ($("#app-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#app-header");
				integration.base.setCfg({
					plr_AnchorParent : "#inskinanchor",
					plr_PageHeightAdjustment : -56,
				});
			}
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
 		$('body > footer, #layout-top, .app-wrapper').css({
			'max-width' : '1010px', 
			'margin-left' : '0'
		}); 
 		$('header').css({
 			'margin-left' : '-20px'
 		});
 		$('body > main').css({
 			'margin-left' : '0px'
 		});
      }else {		
    	$('body > footer').css({
			'max-width' : '1010px', 
			'margin' : '0 auto'
		}); 
      }
   }
});
