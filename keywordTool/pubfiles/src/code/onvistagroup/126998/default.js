integration.meta = {
	'sectionID' : '126998',
	'siteName' : 'Golf - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707940',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".metafooter_fx").css({
			"max-width" : "960px",
			"position" : "relative"
		});
		//collapsing the leaderboard gap
		$(".ad_top_banner01").hide();
		$(".mt_20").css({
			"margin-top" : "0px"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.footerWidth();
	$(window).on("resize", function(){
		integration.custom.footerWidth();
	});
});

integration.custom.footerWidth = function(){
	var width = $(window).width();
	if(width > 960){
		$(".metafooter_fx").css({
			"left" : "50%",
			"margin-left" : "-480px"
		});
	} else {
		$(".metafooter_fx").css({
			"left" : "0",
			"margin-left" : "0"
		});
	}
};
