integration.meta = {
   'sectionID' : '127376',
   'site' : 'Marie Claire Maison - Smartphone- (FR)',
   'product' : 'PageSkin Edge on smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var headerHeight = $('#page > div > header').height();
	   $('#menuLeft').css({
		  "max-width" : "80%",
		  "width" : "100%"
	   });
	   $('head').append('<style type="text/css">#menuLeft .entries {width: 100% !important;}</style>');
	   $('body').css({
		  "margin-top" : headerHeight
	   });
	   $('#page .globalContainer #body').css({
		  "margin-top" : "8px"
	   });
	   /*$('#page #body article').css({
		  "width" : "95%",
		  "margin" : "0 5px"
	   });
	   $('#page, #page #body article .image, #page #body article .image h1, #page #body article .image img, .bottomBarShareTools').css({
		  "width" : "100%"
	   });
	   $('#page #body .front, #page #body article section').css({
		  "width" : "100%",
		  "margin" : "0"
	   });
	   $('#sas_container_5680233').hide();
	   $('.barShareTools a, .barShareTools span').css({
		  "width" : "20%"
	   });
	   $('.bottomBarShareTools a, .bottomBarShareTools span').css({
		  "width" : "45%"
	   });*/
   }
});
