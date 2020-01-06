integration.meta = {
   'sectionID' : '124871',
   'siteName' : 'Attitude - Desktop - ( UK )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1300]
};

function setWindow() {
return currentWindow.top;
}

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '681792',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1040,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_GetContentHeightVersion' : 2
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   }
});



/*
integration.meta = {
	"sectionID" : "124871",
	"siteName" : "Attitude",
	"publisher" : "attitude",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

function setWindow() {
	return currentWindow.top;
}

integration.params = {

	'mf_siteId' : '681792',
	"plr_UseCreativeSettings" : true,
	//"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1200,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "bannerfoot, text-3, banner-leaderboard",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	
	"plr_FastInit" : true
};
integration.on("adCallResult", function(e) {
	$("#banner-leaderboard").css({
		"margin-top" : "10px"
	});
	$("[id^=rcjsload_]").css({
		"max-width" : "1200px",
		"margin" : "0 auto"
	});
});
integration.on("adServed", function(e) {
	$("#catapult-cookie-bar").css({
		"max-width" : "950px",
		"margin-left" : "-495px",
		"left" : "50%"
	});
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
	integration.custom.InSkinBotCookie();
	$(document).scroll(function() {
		integration.custom.InSkinBotCookie();
	});
	integration.custom.InSkinNarrowCookie();
	$(window).resize(function() {
		integration.custom.InSkinNarrowCookie();
	});
});

integration.custom.InSkinBotCookie = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - 90 < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + 90) - docheight;
		$("#catapult-cookie-bar").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#catapult-cookie-bar").css({
			"margin-bottom" : "0"
		});
	}
}

integration.custom.InSkinNarrowCookie = function() {
	var width = $(window).width();
	if (width < 1000) {
		$("#catapult-cookie-bar").css({
			"margin-left" : "inherit",
			"left" : "inherit"
		});
	} else {
		$("#catapult-cookie-bar").css({
			"margin-left" : "-495px",
			"left" : "50%"
		});
	}
}
*/
