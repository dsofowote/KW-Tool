integration.meta = {
   'sectionID' : '126778',
   'siteName' : 'Erdbeerlounge - Tablet - (DE)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '707743',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true

};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {

   	$("header").css({
		   "max-width" : "1000px",
       "margin" : "0 auto"
	   });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });

         $(".container.cMob").css({
             "margin-left" : "0px"
         });
         $("head").append("<style>html{padding-left:0px !important}</style>");
         $("html").css({
             "padding-left" : "0px"
         });
      }
   }
});
