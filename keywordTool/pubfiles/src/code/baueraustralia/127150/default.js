integration.meta = {
   'sectionID' : '127150',
   'siteName' : 'Australian Womens Weekly - Smartphone - (AU) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707466',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true,
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var ismHeaderHeight = $("header.header").height();
	   
	   $('head').append('<style type="text/css">.side-menu__opened {overflow:visible !important;}</style>');
	   
	   if ($("header.header").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("header.header");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -105,
           });
       }
	   
	   $('#inskinanchor').css({
		  'margin-top' : ismHeaderHeight + 'px'
	   });
	   
	   $('.article .article__container, .homepage__hero-col, .section__container').css({
		  'padding-top' : '0px' 
	   });
	   
	   $('.subscribe-iframe').css({
		  'height' : '300px' 
	   });
	   
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;    	
    
    $('header.header, header.global-header').css({
    	'width' : 'calc(100% + ' + integration.custom.PageSkinRightPanel + 'px)'
    });
});
