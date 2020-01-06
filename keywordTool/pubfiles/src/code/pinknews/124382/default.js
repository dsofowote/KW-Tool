integration.meta = {
	"sectionID" : "124382",
	"siteName" : "Pink News",
	"publisher" : "pinknews",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {

  'mf_siteId': '681752',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_EnableActiveResize" : true,
	"plr_HideElementsByID" : "leaderboard",
	"plr_HideElementsByClass" : "mpu, mini-ad, footer-ad, opinion-mpu, leaderboard",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style>#at-recommendedjumbo-outer-container{ max-width: 1000px; margin: 0 auto; }#at4-whatsnext{ display:none !important} @media (max-width: 1442px) { #at4-share, #at-recommendedside { display: none !important; }  }</style>');
		$('#headline-section, .leaderboard').css({
			'max-width' : '1000px',
			'margin' : '0 auto'
		});

		$('#pre-head').css({
			'width' : '960px',
			'margin' : '0 auto',
			'margin-top' : '10px',
			'padding-left' : '20px',
			'padding-right' : '20px'
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	/* Makes the side menu display above the PageSkin when open */
	$("#click-menu").click(function() {
		var menuOut = $("#click-menu").hasClass("click-menu-active");
		if (menuOut) {
			$(".ism-frame").parent().css({
				"z-index" : "1000000"
			});
		} else {
			$(".ism-frame").parent().css({
				"z-index" : "-1"
			});
		}
		if ($(window).width() < 800) {
			$("#RMX").css({
				"margin-top" : integration.custom.PageSkinTopPanel
			});
		} else {
			$("#RMX").css({
				"margin-top" : "0"
			});
		}
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#navBar, #responsive-menu").css({
			"margin-top" : newheight
		});
	} else {
		$("#navBar, #responsive-menu").css({
			"margin-top" : "0px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/21627008189/Passbacks/Passback_Inskin_DT', [1, 1]).display();
</script>";
};
