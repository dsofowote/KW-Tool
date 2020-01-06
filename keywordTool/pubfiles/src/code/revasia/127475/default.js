integration.meta = {
   'sectionID' : '127475',
   'siteName' : 'Viral Cham - Tablet - (ASIA)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725759',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1050,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$('#back-top').css({
		"right" : integration.custom.FrameSideRight + 20
	});
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	  $('body').css({
		 "margin-top" : "70px"
	  });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('#page-wrap.wide').css({
    		 "max-width" : "1050px",
    		 "margin" : "0"
    	  });
    	  $('.menu-container').css({
     		 "left" : "0"
     	  });
    	  
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "101"
    });
});
