integration.meta = {
   'sectionID' : '126589',
   'siteName' : 'She Knows - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1034,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   
	   $('head').append('<style type="text/css">.ismMenuDisplay {width:0px;}</style>');
	   
	   var ismPageHeightAdjust = $('body > div.ui-header').height(); 
	   
	   if ($("body > div.ui-header").length == 1) {
		   $("<div id='inskinanchor'></div>").insertBefore("#dfp-slot-reskin");
		   integration.base.setCfg({
		   plr_AnchorParent : "#inskinanchor",
		   plr_PageHeightAdjustment : -ismPageHeightAdjust,
		   });
		   }
	   
	   $('.ui-main-container, .ui-backdrop').css({
		   'background' : 'none', 
		   'box-shadow' : 'none'
	   });
	   
	   $('body > div.ui-menu.nav.ismMenuDisplay').css({
		   'z-index' : '5'
	   });
	   
	   var menuClosed = true;
	   $('body > div.ui-header > div.bar.clearfix > div.sections').click(function(){  
		  if(menuClosed){
			  menuClosed = false; 
			  if($('body > div.ui-menu.nav').hasClass('ismMenuDisplay')){
				  $('body > div.ui-menu.nav').removeClass('ismMenuDisplay'); 
			  }			  
		  }else{
			  menuClosed = true; 
			  $('body > div.ui-menu.nav').addClass('ismMenuDisplay'); 
		  }
		   
	   });
   }
});
