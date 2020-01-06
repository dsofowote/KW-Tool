integration.meta = {
   'sectionID' : '127323',
   'siteName' : 'Funweek - Tablet - (IT)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707975',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1192,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_StartScrollOnAnchor" : true,
   "plr_ScrollAdjustment" : 105
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$('head').append('<style type="text/css">div.stretchy-wrapper>div {right: ' + (integration.custom.FrameSideRight + 10) + 'px !important;left: auto !important;}</style>');	
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   
	   var hHeight1 = $('.slim-header').height();
	   var hHeight2 = $('#main-header').height();
	   var hHeight3 = hHeight1 + hHeight2;
	   $('body').css({
		  "margin-top" :  hHeight3
	   });
	   $('#main-header, #barra-submenu, #info-cookie').css({
			  "z-index" :  "20001"
		   });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('#skin_leaderboard, #site').css({
    		  "margin" :  "0"
    	   });
    	  $('#skin_leaderboard').css({
    		  "margin-top" :  "10px",
    		  "max-width" : "1192px"
    	   });
    	  $('#main-header, .slim-header, #info-cookie').css({
    		 "left" : "0" 
    	  });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "20000"
    });
});
