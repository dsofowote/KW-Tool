integration.meta = {
   'sectionID' : '126398',
   'siteName' : 'City Metric - Smartphone - (UK)',
   'platform' : 'smartphone'
};

integration.testParams = {
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
	   
	   $('.mobile-leaderboard-replacement').css({
		   'height' : '0px'
	   });
	   
       $(".sc-toggle").css({
           'left': '-11em', 
           'transition' : 'all 0.3s ease-in-out'
       });
       
       $('.region-sidebar-second').css({
    	   'height' : '100%'
       });
       
       $('.secondary-content').css({
           'right': '-26.6em'
       });

	   var winWidth = $(window).width();
	   
		   $('.centre-for-cities-logo').css({
			   'top' : '1.9em', 
			   'margin-right' : '-60px'
			   
		   });
		   $('.new-statesman-logo').css({
			   'top' : '4.2em', 
			   'margin-right' : '-60px'
		   });
	   
	   if ($(".site-header").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter(".site-header");
           integration.base.setCfg({
               plr_AnchorParent: "#inskinanchor", 
				plr_PageHeightAdjustment : -61
           });
       };
	   
		$('.site-nav').click(function () {
			
			var winHeight = $(window).height(); 
			var ismHeightAdjust = winHeight - (171 * 2); 
			
			
			if($('body').hasClass('site-menu-open')) {
				integration.base.setCfg({
					plr_PageHeightAdjustment : ismHeightAdjust
				});
			}else {
				integration.base.setCfg({
					plr_PageHeightAdjustment : -61
				});
			};
		});

   };
});


integration.on("adServed", function(e) {
});


integration.on('layoutChange', function(e) {

	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	
	var rowCss = "<style>.row {min-width : calc(100% - ";
	rowCss += integration.custom.FrameSideRight; 
	rowCss += "px);}</style>";
	$("head").append(rowCss);
	
	var bannersCss = "<style>.top-banners, .site-header {min-width : calc(100% + ";
	bannersCss += integration.custom.FrameSideRight; 
	bannersCss += "px) !important;}</style>"; 
	$("head").append(bannersCss);
	
	var scCss = "<style>.sc-open .secondary-content {max-width : calc(100% - "; 
	scCss += integration.custom.FrameSideRight; 
	scCss += "px) !important; margin-right: "; 
	scCss += integration.custom.FrameSideRight; 
	scCss += "px;}</style>"; 
	$("head").append(scCss);
	
	$(".sc-toggle").click(function() {
         if ($("body").hasClass("sc-open")) {
             $(".sc-toggle").css({
                 'left': '-3.4em'
             });            
             $('.secondary-content').css({
                 'right': '0'
             });
         } else {
             $(".sc-toggle").css({
                 'left': '-11em'
             });
             $('.secondary-content').css({
                 'right': '-26.6em'
             });
         };
     });
	
	integration.custom.ismSwitchWidth();
	$(window).on('resize', function() {
		integration.custom.ismSwitchWidth();
	});
});


integration.custom.ismSwitchWidth = function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	ismSwitchWidth = $(window).width() - integration.custom.FrameSideRight;
		$('.scrollable-menu').css({
			'width' : ismSwitchWidth
		});
}
