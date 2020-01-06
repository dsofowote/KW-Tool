integration.meta = {
	'sectionID' : '126051',
	'siteName' : 'L Equipe',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706379',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '#outer-edito-content',
	'plr_StartScrollOnAnchor' : true,
	'plr_PageHeightAdjustment' : -20,
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_ScrollAdjustment' : 55,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg"
};

integration.on('init', function(e) {
	document.getElementById("outer-edito-content").style.backgroundColor = "white";
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#outer-edito-content > .block.pb_630").hide();
		$('#dfp_banniere-haute').hide();
		$("head").append("<style>body>#nav-stiky{max-width: 1000px !important; margin:0 auto; right: 0; left:0;}</style>");
		$("body > footer").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
