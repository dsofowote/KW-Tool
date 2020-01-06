integration.meta = {
   'sectionID' : '126818',
   'siteName' : 'Ligalive - Smartphone - (INT)',
   'platform' : 'smartphone'
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
	   $('body').append('<style type="text/css">html, body {min-width: 246px !important;}</style>');
	   var wWidth = $(window).width();
	   if (wWidth < 360) {
		   $('#gdlr-responsive-navigation .dl-trigger').css({
			  "right" : "-66px" 
		   });
	   }
   }
});
