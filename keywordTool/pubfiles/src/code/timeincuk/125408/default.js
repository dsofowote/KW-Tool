integration.meta = {
	"sectionID" : "125408",
	"siteName" : "NON UK InStyle",
	"publisher" : "timeinc",
	"platform" : "desktop"
};


//

integration.testParams = {
	'desktop_resolution' : [1276]
};

integration.params = {
	'mf_siteId' : '706439',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "leaderboard, mpu, ads",
	"plr_HideElementsByClass" : "",
	"plr_PageHeightAdjustment" : -26
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("keystone-premium-skin");
		// your code here
		$('.fb-recommendations-bar').hide();
		$('#container').css({
			'paddingTop' : '10px'
		});
		$('#masthead').css({
			'z-index' : '5000'
		});
		$("head").append("<style>#gallery-promo  { margin-top: -37px !important;}</style>");
		/* Stops the site from jumping down when the PageSkin loads after previously unloading */
		$("body").css({
			"margin-top" : "0px"
		});

		$('#header, #header > nav, #footer-wrap, #region-bottom-wrap').css({
			'max-width' : '1020px',
			'margin' : '0 auto'
		});

		$('#back-to-top').css({
			'bottom' : '101px'
		});
		$(".parallax, .container").css({
			"max-width" : "996px",
			"margin" : "0 auto"
		});
	}
});

integration.on("adServed", function(e) {
	integration.custom.refreshWait();
	/* Logic to call function on publishers page */
	try {
		ipc.inskin.callback();
	} catch (e) {
	}
});

integration.custom.refreshWait = function() {
	try {
		if (window.ipcTags.type == "gallery") {
			setTimeout(refreshGallery, 60 * 1000);
		}
	} catch(e) {
	}
}

integration.custom.refreshGallery = function() {
	refreshcount = 0;
	refreshcount++;
	integration.base.unloadAd();
	/* Stops the site from jumping up when the PageSkin unloads */
	$("body").css({
		"margin-top" : "100px"
	});
	integration.base.makeAdCall({});
	integration.telemetry.recordCustom('refresh_' + refreshcount);
}
/* Passback Tag
 window.ISMPassback = function() {
 return "<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\n googletag.pubads().definePassback('/18711560/instyle', [[970, 250]])\n .display();\n<\\script>";
 }; */

