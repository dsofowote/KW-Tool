integration.meta = {
   'sectionID' : '126803',
   'siteName' : 'Avantages - Tablet - (FR)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707126',
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
	  $('#afterFooter').css({
		 "max-width" : "1024px",
		 "margin" : "0 auto"
	  });
	  /* If statement is very important. If element does not exist PageSkin will not display at all. */
      if ($("#header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter("#header");
          integration.base.setCfg({
              plr_AnchorParent : "#inskinanchor",
              plr_PageHeightAdjustment : -229/*Enter minus value of navigation height here.*/,
          });
      }
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('#header, #page, #footer, #afterFooter').css({
    		 "margin" : "0"
    	 });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/AVANTAGES/RG/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};