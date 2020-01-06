integration.meta = {
   'sectionID' : '125144',
   'siteName' : 'IIGazzettino - Desktop - (IT)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.params = {
	'mf_siteId' : '706426',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	'plr_FastInit' : true
};

integration.on("layoutChange", function(e) {
	$("#socialbar").css({
		"max-width" : "1000px"
	});
	$(".ism-frame").parent().css({
		"z-index" : "10001"
	});
	integration.custom.PageSkinBotPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBotNav();
	$(document).scroll(function() {
		integration.custom.InSkinBotNav();
	});
	$(window).resize(function() {
		integration.custom.InSkinBotNav();
	});
});

integration.custom.InSkinBotNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	var width = $(window).width();
	if (width > 1000) {
		$("#socialbar").css({
			"margin-left" : "-500px",
			"left" : "50%"
		});
	} else {
		$("#socialbar").css({
			"margin-left" : "0px",
			"left" : "0px"
		});
	}
	if (docheight - integration.custom.PageSkinBotPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBotPanel + 2) - docheight;
		$("#socialbar").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#socialbar").css({
			"margin-bottom" : "0px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/38681514/Gazzettino/HomePage/Skin', [1, 1]).display();\n<\\script>";
};
