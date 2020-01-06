integration.meta = {
	"sectionID" : "125078",
	"siteName" : "Fotbollskanalen",
	"publisher" : "sportsverige",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '707640',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".header, .subnav-holder").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0",
			"position" : "relative",
			"top" : "0"
		});
		$(".fixed-header-holder, .header").css({
			"margin-bottom" : "0"
		});

		$(".cookie-holder, #footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		$("body").css({
			"overflow" : "visible"
		});
		$(".header").css({
			"padding" : "0 10px"
		});
		$(".standard .main-content").css({
			"float" : "none",
			"margin" : "0 auto"
		});
		$(window).scroll(function() {
			var windowHeight = $(window).scrollTop() + $(window).height() - 100;
			var docBottom = $(document).height() - 100;
			if (windowHeight == docBottom) {
				$('head').append("<style>.cookie-holder{bottom: 100px !important;}</style>");
			} else {
				$('head').append("<style>.cookie-holder{bottom: 0 !important;}</style>");
			}
			if ($(window).scrollTop() > $('.ism-frame').parent().height()) {
				$('.header, .subnav-holder').css({
					"position" : "fixed"
				});
				$('.subnav-holder').css({
					"top" : "72px"
				});
			} else {
				$(".header, .subnav-holder").css({
					"position" : "relative",
					"top" : "0"
				});
			}
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script>var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];<\\script><div class=\"bam-ad-slot\"></div><script src=\"https://assets.bonad.io/bundles/bau-light.js\"><\\script><script>var adUnitPath = \"bb/fotbollskanalen\";var slotName = \"panorama\";var slotNameNumber = \"1\";var sizes = \"980x240,980x120,980x360,980x480,980x551\";var targeting = \"\";window.document.getElementsByClassName(\"bam-ad-slot\")[0].id = slotName + \"-\" + slotNameNumber;googletag.cmd.push(function() {window.Bau.initiatePassforward(adUnitPath, slotName, slotNameNumber, sizes, targeting, '{%parameters%}');});<\\script>";
};
