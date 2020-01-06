integration.meta = {
	"sectionID" : "125226",
	"siteName" : "Mirror Irish Mirror",
	"publisher" : "mirror",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'mf_siteId' : '706472',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByClass" : "box-bottom",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#div-gpt-ad-oop').css({
			'width' : '970px',
			'margin' : '0 auto'
		});
		$('#page').css({
			'margin-top' : '0px'
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script>\ntry {\nPageSkinFallback();\n} catch (e) {};\n<\\script>";
};