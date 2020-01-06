integration.meta = {
	'sectionID' : '127263',
	'siteName' : 'Now To Love - Tablet- (AU) ',
	'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707090',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$(".site-wrapper").css({
				"margin-left" : "0px"
			});
			$("header, .uniheader").css({
				"z-index" : "1000000"
			});
			$(".ad--section-top-leaderboard").css({
				"margin-left" : "0px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
		if ($(".header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$(".page").css({
			"overflow" : "initial"
		});
		$(".header-wrapper").css({
			"margin-bottom" : "0px"
		});
		// collapse top ad unit on publishers request
		$("#gpt-slot-0").hide();
	}
});

integration.on('adServed', function(e) {
	var headerHeight = $("header").outerHeight();
	$(".uniheader").css({
			"margin-top" : headerHeight + 10
		});
		
	//console.log($('header').hasClass('uniheader'));
	if ($('.uniheader').hasClass('uniheader')) {
		console.log('uniheader is displaying')
	} else {
		$("#inskinanchor").css({
			"margin-top" : headerHeight
		});
	}

});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n   googletag.pubads().definePassback(\"/13534306/nowtolove\", [728, 90],[970, 250]).display();\n<\\script>";
};
