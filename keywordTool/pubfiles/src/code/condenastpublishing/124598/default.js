integration.meta = {
    'sectionID' : '124598',
    'siteName' : 'GQ - Desktop - (FR)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706565',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1180,
	//"plr_GetContentHeightVersion" : 2,
	"plr_PageHeightAdjustment" : -16,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
    $("html").css({
      "overflow-x" : "hidden"
    });
    $('#app-root').css({
      "width" : "1160px",
      "margin" : "0 auto"
    });
    $('[data-test-id="LogoLink"]').css({
      "left" : "0",
      "top" : "0"
    });
	}
});

integration.on("adServed", function(e) {
	$(".side_promotion_wrapper").hide();
});
