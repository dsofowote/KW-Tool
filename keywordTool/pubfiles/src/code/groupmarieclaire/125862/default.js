integration.meta = {
   'sectionID' : '125862',
   'siteName' : 'Magic Maman - Tablet - (FR)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706774',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true,
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $('head').append('<style type="text/css">body {margin-left:0px !important;}</style>');
	   var headerHeight = $('#header').height() + $('#beforeHeader').height() - $('#menuServicesContainer').height(); 
	   if ($("#menuEntreesContainer").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("#menuEntreesContainer");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -headerHeight,
           });
       }
       
       $(".ArticleLink, #header").css({
           "max-width" : "1024px",
           "margin" : "0 auto"
       });
       
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	 $('#header, #page, #footer').css({
    		 'margin-left' : '20px'
    	 });
    	 $('#footer, #menuServicesContainer').css({
    		'max-width' : '1024px' 
    	 });
    	 $('#header > div.contentHeaderContainer, #menuEntreesContainer').css({
    		'margin-left' : '-20px', 
    		'min-width' : 'calc(100% + 20px)'
    	 });
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
