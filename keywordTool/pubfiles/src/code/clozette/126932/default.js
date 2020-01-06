integration.meta = {
   'sectionID' : '126932',
   'siteName' : 'E!Online - Smartphone - (ASIA)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707113',
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
	   if ($("#pageHeader").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("#pageHeader");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -50,
           });
       }
	   
	   $('html').css({
		  'background-color' : '#252525' 
	   });
	   $('body').css({
		  'background-color' : '#ffffff', 
		  'min-width' : '300px'
	   }); 
	   $('#mps-mboxad-sst-1').css({
		  'display' : 'none' 
	   });
	   
	   $('#mainNav').css({
		   'max-width' : '450px'
	   });
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop; 
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight; 	
	
	$('.hero').css({
		'width' : 'calc(100% - ' + integration.custom.PageSkinRightPanel + 'px)', 
		'padding-top' : integration.custom.PageSkinTopPanel + 'px'
	});
    
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "33"
    });
});
