integration.meta = {
	"sectionID" : "124704",
	"siteName" : "M�nstersche Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706535',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 996,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	
	$('#header.fixed').css({
		'margin-left' : '160px'
	});
	$('.ism-frame').css({
		'z-index' : '10003'
	});
	$("body").css({
		"overflow" : "visible"
	});
	$("html").css({
		"overflow-x" : "hidden",
		"overflow-y" : "visible"
	});
	$("#page, #footer").css({
		"width" : "auto"
	});
	$(window).scroll(function() {
		$('#header').css({
			'margin-left' : '0px'
		});
		$('#header.fixed').css({
			'margin-left' : '160px'
		});
		$('.ism-frame').css({
			'z-index' : '10003'
		});
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var rowcss = "<style>.f-nav{left:"
	rowcss += integration.custom.FrameSideRight + 20;
	rowcss += "px !important;}</style>";
	
	console.log(rowcss);
	$("head").append(rowcss);
});
