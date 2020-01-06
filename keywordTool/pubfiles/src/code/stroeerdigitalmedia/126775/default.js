integration.meta = {
   'sectionID' : '126775',
   'siteName' : 'OK Magazin - Tablet - (DE)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707994',
   'plr_PageAlignment' : 'left',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	$("[id*='div-gpt-ad']").css({
		   "height" : "0px"
	   });
	   $("#skip-link").css({
		   "display" : "none"
	   });
	   $("#wrapper").css({
		   "width" : "100%",
	   });
	   $("#navigation:after, #navigation, header, #main-menu, footer").css({
		   "max-width" : "1000px"
	   });
	   $(".linkWrapper a").css({
		   "padding" : "0px 12px"
	   });
	   $("#main-menu").css({
		   "min-width" : "1000px"
	   });
	   $(".panel-col-last.panel-panel").css({
		   "position" : "relative",
		   "right" : "150px"
	   });
	   
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel(); 
	   
	   $("head").append("<style>#header #navigation .menu li .linkWrapper a.firstLayerLink{padding:0px 13px}</style>");
	   $("head").append("<style>#navigation::after{max-width:1000px}</style>");
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
      }
   }
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>#header.fixed .search__field{right:" + integration.custom.FrameSideRight + "px; position:fixed;}</style>");

});
