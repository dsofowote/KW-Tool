integration.meta = {
   'sectionID' : '127634',
   'siteName' : 'Good Food - Desktop - (INT ex UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '768791',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1100,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("#footer").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$("#ad-leader").hide();
		
		$('div[id^="ad-manager-ad-leaderboard"], .ad--leaderboard, div[id^="ad-manager-ad-top_slot"').css({
			"height" : "0px",
			"min-height" : "0px",
			"margin" : "0px",
			"display" : "none"
		});
		$("body").css({
			"background-image" : "none"
		});
		$(".cookie-law").css({
			"z-index" : "101"
		});
		
		$("#scroller").css({
			"margin-top" : "-10px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
	$("html, body").css({
		"overflow" : "visible"
	});
	integration.custom.PageSkinUnderNavBar();
});

integration.on("layoutChange", function(e) {
	$(window).resize(function() {
		integration.custom.PageSkinUnderNavBar();
	});
});

integration.custom.PageSkinUnderNavBar = function() {
	var width = $(window).width();
	if (width <= 755) {
		$(".ism-frame").parent().css({
			"top" : "50px"
		});
		InSkinObj.setCfg({
			plr_PageHeightAdjustment : -50
		});
	} else {
		$(".ism-frame").parent().css({
			"top" : "0"
		});
		InSkinObj.setCfg({
			plr_PageHeightAdjustment : 0
		});
	}
}

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100"
    });
});