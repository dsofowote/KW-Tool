integration.meta = {
   'sectionID' : '125612',
   'siteName' : 'The Sun',
   
   'platform' : 'smartphone',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
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
   	$("head").append("<style>#back-top{display: none !important;}</style>");
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $("#topMenu, #topNavCTN, #pageCTN, #bottomNavCTN, #footer").css({
         	"margin-left" : "0px"
         });
      }
   }
});
