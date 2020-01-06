integration.meta = {
   'sectionID' : '127388',
   'siteName' : 'Famili - Tablet - FR',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '729035',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("#socialbanner, #barreservice").css({
		   "max-width" : "980px",
		   "margin" : "0 auto",
		   "left" : "0",
		   "right" : "0",
		   "padding" : "0px 10px"
	   });
	   
	   $("#barreservice").css({
		   "z-index" : "10"
	   });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
        $("#page, #thematiquesTop, #logoHeader .content, #identificationHeader .content,#prefooter .remontee, #footer, #menuentreesHeader .content, .logosmall").css({
            "margin-left" : "0px"
        });
        $("#socialbanner").css({
		   "max-width" : "990px",
		   "margin-left" : "15px",
		   "left" : "0",
		   "right" : "0",
	   });
	   $("#barreservice").css({
		   "margin-left" : "15px"
	   });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});
