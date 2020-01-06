integration.meta = {
	'sectionID' : '125760',
	'siteName' : 'Plan Your Perfect Wedding',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
	
  'mf_siteId': '681700',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		$("head").append('<style>#block-om_maximenu-om-maximenu-1.ism-fixed-header{margin-left: -495px !important; left: 50% !important;</style>}')
		$("#block-om_maximenu-om-maximenu-1").css({
			"max-width" : "990px"
		});
	}
});

integration.on("adServed", function() {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	var headerHeight = $("#header-wrapper").outerHeight();
	var leaderboardHeight = $("#leaderboard-wrapper").outerHeight();
	if (height < (integration.custom.PageSkinTopPanel + headerHeight + leaderboardHeight + 30)) {
		$("#block-om_maximenu-om-maximenu-1").removeClass("ism-fixed-header");
		$(".container-inline, .logo-span").css({
			"display" : "block"
		});
	} else {
		$("#block-om_maximenu-om-maximenu-1").addClass("ism-fixed-header");
		$(".container-inline, .logo-span").css({
			"display" : "none"
		});
	}
}
