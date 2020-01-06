integration.meta = {
	'sectionID' : '126501',
	'siteName' : 'La Parisienne - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707135',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {

     $(".instagram-flux__gallery").css({
       "margin" : "0 10px!important"
     });

     $(".cookie-banner").css({
       "margin" : "0 auto",
       "width" : "1000px"
     });

     $(".cookie-banner__close").css({
       "float" : "right"
     });

     $("head").append("<style type='text/css'> .instagram-flux__gallery {margin: 0 10px!important;}</style>");

      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* Pageskin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });

         $("head").append("<style type='text/css'> .wrapper {margin:0 !important;}</style>");

         $("head").append("<style type='text/css'> .footer {width:1000px !important;}</style>");


      }
   }
});
