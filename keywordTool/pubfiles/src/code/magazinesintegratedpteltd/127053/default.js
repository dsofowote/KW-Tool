integration.meta = {
   'sectionID' : '127053',
   'siteName' : 'BiTES - Tablet - (SG)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707631',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('.container, #mainmenu, #content, footer, #st-container, .owl-item').css({
		   "max-width" : "1024px",
		   "margin" : "0 auto"
	   });
	   $('main, #home.page main .top .featured').css({
		   "width" : "670px"
	   });
	   $('#home.page main .top .featured .slide .details').css({
		   "width" : "345px"
	   });
       if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
    	   $('.container, #mainmenu, #content, footer, #st-container').css({
    		   "margin" : "0"
    	   });
       integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
