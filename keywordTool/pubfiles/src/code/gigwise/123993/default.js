integration.meta = {
	"sectionID" : "123993",
	"siteName" : "Entertainmentwise",
	"publisher" : "giantdigital",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1400]
};

integration.params = {
	'mf_siteId' : '706183',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1140,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "topad, sideAd, centre-it"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		
		$("#vce-main").css({
			"max-width" : "1140px",
			"margin" : "0 auto"
		});
		$('html').css({
			'background-color' : 'transparent'
		});
		$("#sticky_header, #at4-welcome").css({
			"max-width" : "1140px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$(".header-sticky .main-navigation a").css({
			"padding" : "15px 10px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000000"
	});
});

integration.on("layoutChange", function(e) {
	$(window).scroll(function() {
		$("#sticky_header").css({
			"max-width" : "1140px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='http://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1072454/GIGWISE_Passback_1x1', [1, 1]).display();\n<\\script>";
};
