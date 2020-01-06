integration.meta = {
   'sectionID' : '128168',
   'siteName' : 'ellahoy - Tablet - ( ES )',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '984318',
   'plr_PageAlignment' : 'center',
   'plr_Responsive' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var headerHeight = $("#wrapSite > div.header-wrap").height();
	   if ($("#home-content").length == 1) {
           $("<div id='inskinanchor'></div>").insertBefore("#home-content");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -56,
               plr_StartScrollOnAnchor : true
           });
       } else if($("#hasSkin").length == 1){
         $("<div id='inskinanchor'></div>").insertBefore("#hasSkin");
         integration.base.setCfg({
             plr_AnchorParent : "#inskinanchor",
             plr_PageHeightAdjustment : -56,
             plr_StartScrollOnAnchor : true
         });
       }
       if($(".menuspeciale").length == 1){
         integration.base.setCfg({
           plr_ScrollAdjustment : 56
         });
       }
	   $('head').append('<style type="text/css">#wrapSite > div.header-wrap.scroll-to-fixed-fixed, #wrapSite > div.header-wrap {left: 0 !important;}</style>');
	   $('head').append('<style type="text/css">#wrapSite > div.header-placeholder-no-class, #wrapSite > div:nth-child(3), .sbuttonIwrapper {height: 0 !important;}</style>');
	   $('#wrapPageContainer, #wrapSite > div.footer-wrap.visible-desktop, #wrapCol').css({
		    "max-width" : "1024px",
		   "margin" : "0 auto"
	   });
	   $('#wrapCol').css({
		    "padding" : "5px"
	   });
	   $('#wrapSite > div.footer-wrap.visible-desktop').css({
		    "padding" : "0 5px"
	   });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
    	  $('#wrapPageContainer, #wrapSite > div.footer-wrap.visible-desktop, #wrapCol').css({
    		"max-width" : "1024px",
  		    "margin" : "0"
    	  });
        integration.custom.IsEdge  = true
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});
integration.on("layoutChange", function(e){
  integration.custom.FrameSide = e.data.plr_FrameSide;
  if (integration.custom.IsEdge){
    $(".header-wrap, .sub-menu, .menuspeciale").css({
      "margin-left" : -integration.custom.FrameSide
    });
  }
});
