integration.meta = {
   'sectionID' : '127320',
   'siteName' : 'Homes To Love - Tablet- (AU)',
   'platform' : 'tablet'
};



integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '708064',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headHeight = $(".header").height();
   	$(".section__heading").css({
		   "display" : "none"
	   });
     if ($(".header").length == 1) {
                 $("<div id='inskinanchor'></div>").insertAfter(".header");
                 integration.base.setCfg({
                     plr_AnchorParent : "#inskinanchor",
                     plr_PageHeightAdjustment : -headHeight
                 });
             }
      $("#inskinanchor").css({"padding-top": headHeight});
      $(".default-template").css({"overflow-x": "visible"});
      $(".site-wrapper").css({"margin-top": "10px"});
      $("head").append("<style>.header-search {top: 0px !important;}</style>");
      $("head").append("<style>.header--pinned {margin-top: 0px !important}</style>");
      $("head").append("<style>.header {margin-top: 0px !important}</style>");

	if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
		/* PageSkin Edge specific changes */
		$('head').append('<style type="text/css">.header:not(.header--pinned) {margin-left:0px;}</style>');
		$('head').append('<style type="text/css">.header--pinned {margin-left:-20px !important;}</style>');
    $(".footer__wrapper").css({"margin-left": "0px"});
		integration.base.setCfg({
			'plr_PageAlignment' : 'left'
		});
		$("#app > div > div > div.header-wrapper > header, #app > div > div > header").css({
			"width" : "1024px",
		});
		$(".uniheader").css({
			"margin-left" : "0px"
		});

		$("div.ad.ad--section-top-leaderboard, div.site-wrapper, div.footer-wrapper").css({
			"max-width" : "1024px",
			"margin-left" : "0px"
		});

      }else{
    	  $("#app > div > div > div.header-wrapper > header, #app > div > div > header").css({
    		 "width" : "1024px",
    		 "margin" : "0 auto",
    		 "left" : "0px",
    		 "right" : "0px"
    	  });
       }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n\n   googletag.pubads().definePassback(\"/13534306/homestolove\", [728, 90]).display();\n\n<\\script>";
};
