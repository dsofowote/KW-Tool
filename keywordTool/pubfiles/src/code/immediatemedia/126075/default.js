integration.meta = {
   'sectionID' : '126075',
   'siteName' : 'Radio Times - Desktop - (INT ex UK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.params = {
	'mf_siteId' : '707351',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=google_ads_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("#global-banner-ad, #adBannerSpacer").css({
			"min-height" : "0",
			"padding" : "0"
		});
		$("#outerwrapper, #header, #adBannerSpacer, #footer").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$("body").css({
			"background-image" : "none"
		});
		$("#adBannerSpacer").css({
			"padding-top" : "10px"
		});
		$(".eyebrow").css({
			"border-bottom" : "0px solid #fff"
		});
		$("#adBannerSpacer").hide();
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\nconsole.log(event);\nvar h = event.size[0];\nif(w==728)\n{\nself.frameElement.style.setProperty (\"width\", '728px');\nself.frameElement.style.setProperty (\"height\",'90px');\n}});\ngoogletag.pubads().definePassback('176986657/tracking.immediate.co.uk/pgrunofnetwork-passback', [[970,250],[728,90]]).setTargeting('thirdparty',['inskin']).display();\n<\\script>";
};
