integration.meta = {
   'sectionID' : '126530',
   'siteName' : 'Yahoo - Tablet - (AU)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706928',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 986,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_URLKeywords' : 2,
   'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
	
	   if (e.data.hasSkin) {
		   if ($(".uni-header").length == 1) {
			   $("<div id='inskinanchor'></div>").insertAfter(".uni-header");
				   integration.base.setCfg({
					   plr_AnchorParent : "#inskinanchor",
					   plr_PageHeightAdjustment : -76
				   });
				   
					if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
				         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
				         $('#page').css({
				        	 'max-width' : '986px'
				         }); 
				         $('.uni-header').css({
				        	 'width' : 'calc(100% + 20px)', 
				        	 'margin-left' : '-20px'
				         }); 
				    	 $('.header.rapid-track').css({
				    		 'max-width' : '986px', 
				    		 'padding-right' : '0px', 
				    		 'padding-left' : '0px'
				    	 });
				      }else{
				    	  $('.header.rapid-track').css({
				    		  'max-width' : '986px', 
				    		  'margin' : '0 auto', 
				    		  'padding-right' : '0px', 
				    		  'padding-left' : '0px'
				    	  });
				      }
				$('.page-inner').css({
					'padding-right' : '0px', 
					'padding-left' : '0px'
				});
		   }   
			
	   }
});
