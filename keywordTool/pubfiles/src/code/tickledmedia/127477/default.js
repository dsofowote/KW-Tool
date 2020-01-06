integration.meta = {
   'sectionID' : '127477',
   'siteName' : 'The Asian Parent - Tablet - (ASIA)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '726473',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1030,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var hHeight = $('.navbar').height();
	   $('body').css({
		  "margin-top" :  hHeight
	   });
	   $('.navbar').css({
		  "box-shadow" :  "none"
	   });
	   $('#sticky-ads').css({
		  "display" :  "none"
	   });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('#sg > div.container').css({
    		  "margin" :  "0"
    	   });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "1234567851"
    });
});