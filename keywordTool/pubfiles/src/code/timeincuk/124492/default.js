integration.meta = {
   'sectionID' : '124492',
   'siteName' : 'WhatsonTV - (Plus on NON UK Only) - Tablet - (UK)',
   'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '706225',
'plr_PageAlignment' : 'center',
'plr_ContentW': 990,
'plr_ContentType': 'PAGESKINEXPRESS',
'plr_UseFullVersion': true,
'plr_UseCreativeSettings': true,
'plr_HideElementsByID' : '',
'plr_HideElementsByClass' : ''
};



integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

	$('.section-content').css({
		'display' : 'none'
	});

	if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
	         /* PageSkin Edge specific changes */
	         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
	         $('#wrapper').css({
	        	'margin-left' : '0px'
	         });
	         $('#navigation').css({
	        	'width' : '980px'
	         });
	    }
	}
});


/* Passback Tag */
window.ISMPassback = function() {
   return inskinPassback();
};
