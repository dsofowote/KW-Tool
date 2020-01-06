integration.meta = {
   'sectionID' : '126748',
   'siteName' : 'The Fix - Tablet - (AU)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707041',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	  $('.header-netkit, nav, .container, .header-module__inner, .shortcuts, #page').css({
		 "max-width" : "1024px",
		 "margin" : "0 auto"
	  });
	  
	  $(".fixed-footer .main-menu").css({
		  "float" : "none"
	  });
	  $("#ninemsn-ad-4").css({
		  "height" : "0px",
		  "margin" : "0px"
	  });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('.header-netkit, nav, .container').css({
        	 "max-width" : "1024px",
	   		 "margin" : "0 auto 0 0"
	   	 }); 
         $('.header-module__inner').css({
	   		 "margin-left" : "20px"
	   	 }); 
      }
   }
});
