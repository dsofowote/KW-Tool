integration.meta = {
	"sectionID" : "125123",
	"siteName" : "Nord Bayern",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707668',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1200,
	"plr_UseFullVersion" : true,
	"plr_AnchorParent" : "#page",
	"plr_HideElementsByID" : ""
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.container_40').css({'width':'1200px'});
			$('#page_billboard').css({'display':'none'});

    }
});

integration.on("adServed", function(e) {
		  var headHeight = $('header').height();
		           integration.base.setCfg({
		           plr_ScrollAdjustment: -headHeight,
		           });
		   });

integration.on("layoutChange", function(e) {
	// var PageSkinLeftPanel = e.data.plr_FrameSide;
	// $("html").css({
	// 	"margin-left" : PageSkinLeftPanel
	// });
	// $("#myslidemenu").css({
	// 	"display" : "none"
	// });
	// $("#container").css({
	// 	"margin-left" : "0px",
	// 	"max-width" : "990px"
	// });
	// jQuery(window).trigger("resize");
});
