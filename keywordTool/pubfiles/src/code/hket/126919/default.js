integration.meta = {
   'sectionID' : '126919',
   'siteName' : 'U LIfestyle - Smartphone - (HK)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : []
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707595',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	var navHeight = $('#top nav').height();
	
	$('.sb-right').css({
		"right" : integration.custom.FrameSideRight,
		"top" : navHeight,
		"z-index" : "10"
	});
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var navHeight = $('#top nav, .mobile .mobile-header').height();
	   $('html, body').css({
		  "overflow-x" : "visible" 
	   });
	   $('#sb-site').css({
		  "margin-top" : "0" 
	   });	   
	   $('body').css({
		  "padding-top" : navHeight 
	   });
	   $('.ui-mobile [data-role=page], .ui-mobile [data-role=dialog], .ui-page').css({
		  "position" : "relative"
	   });
	   $("head").append('<style>[data-role="main"]{padding-top: 0 !important;}</style>');
   }
});
