integration.meta = {
   'sectionID' : '126207',
   'siteName' : 'IlGazzettino - Tablet - (IT)',

   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706852',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 998,
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
         $("#wrapper").css({
         	"margin-left" : "0"
         });
         $("body").css({
         	"width" : "auto"
         });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/38681514/Gazzettino/HomePage/Skin', [1, 1]).display();\n<\\script>";
};
