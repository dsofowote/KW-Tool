integration.meta = {
	"sectionID" : "124610",
	"siteName" : "Nordbayern",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706361',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 990,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0,
	'plr_ScrollAdjustment' : -145
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
		 $("header").css({
			 "min-width" : "990px",
			 "margin" : "0 auto",
			 "width" : "990px",
			 "left" : "0",
			 "right" : "0"
		 });

		 $("#container").css({
			 "width" : "990px"
		 });
   }
});

integration.on("layoutChange", function (e) {
    var frtop = e.data.plr_FrameTop;

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var aHeight = $("header").height();
      var bHeight = $("#myslidemenu").height();
      var hheight = aHeight + bHeight;
      var scrollps = frtop + hheight - 30;

      if (scroll < scrollps) {
				$("#nbNBHome").removeClass("fixedHeaderNav");
      } else {
				$("#nbNBHome").addClass("fixedHeaderNav");
      }
    });
});
