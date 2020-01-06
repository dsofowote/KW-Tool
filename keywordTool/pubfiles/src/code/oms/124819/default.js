integration.meta = {
	"sectionID" : "124819",
	"siteName" : "IVZ Aktuell",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1220]
};

integration.params = {
	'mf_siteId' : '706772',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 992,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#container_outer").css({
			"width" : "960px",
			"padding-right" : "17px"
		});
		$("#container_banner_leer").css({
			"height" : "auto"
		});
		$(".with-banner-desktop-leaderboard").css({
			"margin-top" : "100px"
		});
	}
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
		var stylesCSS = '<style id="inskinStyles" type="text/css">';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
		integration.custom.InSkinIndexBar();
		$( document ).scroll(function() {
				integration.custom.InSkinIndexBar();
		});
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < (integration.custom.PageSkinTopPanel + 68)){
        var newheight = integration.custom.PageSkinTopPanel - height + 10;
        $(".banner-desktop-leaderboard").css({
						"position" : "fixed",
            "top" : newheight
        });
    }else{
        $(".banner-desktop-leaderboard").css({
						"position" : "absolute",
            "top" : "0px"
        });
    }
}

integration.custom.InSkinIndexBar = function() {
    var height = $(document).scrollTop();
		var headerHeight = $('.header').height();
    if( height < (integration.custom.PageSkinTopPanel + 100)){
        var barheight = integration.custom.PageSkinTopPanel - height + 100 + headerHeight + 30;
				var newStyles = ".index{top: " + barheight + "px !important;}";
    }else{
				var newStyles = ".index{top: 85px !important;}";
    }
		document.getElementById("inskinStyles").innerHTML = newStyles
}
