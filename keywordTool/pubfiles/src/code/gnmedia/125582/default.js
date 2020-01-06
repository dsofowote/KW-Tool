integration.meta = {
   'sectionID' : '125582',
   'siteName' : 'GN Cars',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707813',
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
   	   	$(".atTemplateBody").css({
   		"max-width" : "1030px",
   		"margin" : "0 auto"
   	});
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $(".atTemplateBody").css({
         	"margin-left" : "0px"
         });
      }
   }
});
