integration.meta = {
	"sectionID" : "125298",
	"siteName" : "Mirror Get Reading",
	"publisher" : "mirror",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1468]
};

integration.params = {
	'mf_siteId' : '707552',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1208,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "div-gpt-ad-bottom-lb, div-gpt-ad-top-mpu",
	"plr_URLKeywords" : "",
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 80
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style type="text/css">body {margin-top: 123px;}</style>');
		$('main, footer').css({
		    "max-width" : "1208px",
		    "margin" : "0 auto"
		});
		$('#div-gpt-ad-top-slot').css({
		    "margin-top" : "10px"
		});
	}
});
