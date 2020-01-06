integration.meta = {
   'sectionID' : '127143',
   'siteName' : ' Gulf News- Smartphone - (MENA)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707005',
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
	   
	   //to arrange the elements in the swipe menu and make PageSkin visible when the menu is open  
	   $('head').append('<style type="text/css">body {overflow:visible !important;}</style>');
	   $('head').append('<style type="text/css">.off-canvas-hottopics-title {margin: 0px !important;}</style>');
	   $('head').append('<style type="text/css">.main-section {width: 100% !important;}</style>');
	   
	   $('.off-canvas-wrap').css({
			  'overflow' : 'scroll' 
		   });
	   
	   //reduce the size of the "marquee" lines in the menu to fit on only one line
	   $('.tab-bar-section').css({
		   'width' : '71%'
	   });
	   
	   $('off-canvas-hottopics-title').css({
		  'width' : 'auto', 
	   });
	   
	   //adjust the size of the elements in the sharing bar 
	   $('.rrssb-buttons > li').css({
		  'width' : '18%' 
	   });
	   
	   $('.rrssb-buttons > li > a > div').css({
			  'width' : '100%' 
	   });
	   
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;    
    var ismSocialShareCSS = '<style type="text/css">.social-share {width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}</style>'
	$('head').append(ismSocialShareCSS);
});