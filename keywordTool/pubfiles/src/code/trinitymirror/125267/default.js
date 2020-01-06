integration.meta = {
	"sectionID" : "125267",
	"siteName" : "Mirror Coventry Telegraph",
	"publisher" : "mirror",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'mf_siteId' : '706496',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 1,
	"plr_HideElementsByClass" : "box-bottom",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#div-gpt-ad-oop').css({
			'width' : '970px',
			'margin' : '0 auto'
		});
		$('#page').css('margin-top', '0px');
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script>\n  try {\n    PageSkinFallback();\n  } catch (e) {};\n  <\\script>\n}";
}; 