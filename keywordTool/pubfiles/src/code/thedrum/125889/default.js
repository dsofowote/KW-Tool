integration.meta = {
   'sectionID' : '125889',
   'siteName' : 'The Drum',

   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '706452',
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
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("#page-wrapper").css({
         	"margin-left" : "0px",
         	"padding" : "0px"
         });
         $("#footer").css({
         	"margin-left" : "0px",
         	"padding" : "30px"
         });
         $("#content, body > div.js-all-navigation.all_nav, body > div.center.dark, footer").css({
           "width" : "1000px",
           "margin-left" : "0px"
         });
      }
   }
});
