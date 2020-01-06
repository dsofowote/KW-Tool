integration.meta = {
	"sectionID" : "124692",
	"siteName" : "Dorstener Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706296',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1016,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$(".WcmsHeader").css({"max-width":"1016px", "margin":"auto"});
			$(".TopNavigationRight").css({"min-width":"180px"});//check
			$(".TopNavigationLeft").css({"min-width":"220px"});//check
			$(".TopNavigationRight, .DesktopHeaderSearchBox").css({"margin-right":"0px"});
			$(".TopNavigationLeft, #topnavi, .HeaderPremiumIcon").css({"margin-left":"0px"});
    }
});

integration.on("adServed", function(e) {
	$("#header.fixed").css({
		"margin-left" : "160px"
	});
	$(".ism-frame").css({
		"z-index" : "10003"
	});


	$(window).scroll(function() {
		$("#header").css({
			"margin-left" : "0px"
		});
		$("#header.fixed").css({
			"margin-left" : "160px"
		});
		$(".ism-frame").css({
			"z-index" : "10003"
		});
	});
});
