integration.meta = {
	"sectionID" : "125399",
	"siteName" : "Mirror Irish Mirror ROI",
	"publisher" : "mirror",
	"platform" : "tablet"
};




integration.testParams = {};

integration.params = {
	'mf_siteId' : '706511',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1024,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_URLKeywords" : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('body > header > div.primary').height();
		if ($(".mod-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".mod-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 160
			});
		}
		$("body").css({
			"margin-top" : "113px"
		});
		$("head").append("<style>.mod-pancakes{padding: 0 !important;}</style>");
		$("body > main, body > footer, .mod-pancakes>section>.pancake").css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"width" : "100%"
		});
		$(".section-head, .breadcrumbs, .topic-head").css({
			"max-width" : "1024px",
			"width" : "100%",
			"margin" : "0 16px"
		});
		$(".mod-pancakes .primary").css({
			"margin" : "0 auto",
			"width" : "calc(100% - 351px)"
		});
		$("footer").css({
			"padding-left" : "0",
			"padding-right" : "0"
		});
		$("footer #section-links, footer #utility-links").css({
			"max-width" : "1024px",
			"margin" : "0 5px"
		});
		$(".primary.publication-theme-highlight").css({
			"top" : "0px"
		});
		$(".secondary").css({
			"top" : "80px"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("body > main, body > footer").css({
				"max-width" : "1024px",
				"margin-left" : "0px"
			});
			$("footer ul").css({
				"max-width" : "1000px"
			});
			$("body").css({
				"width" : "auto"
			});
			$(".mod-pancakes>.primary").css({
				"margin" : "0"
			});
		}
	}
});

integration.on('adServed', function(e) {
	$(".gpt").css({
		"max-width" : "1024px"
	});
	$("body > header > div").css({
		"z-index" : "100"
	});
}); 

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- PassBack AdSlot 1 for Ad Unit 'irishmirror.ie' ### Size: [[970,250]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5293/irishmirror.ie', [[970,250]])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>\n<!-- End -->";
};