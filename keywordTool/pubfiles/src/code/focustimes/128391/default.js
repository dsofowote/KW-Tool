integration.meta = {
	'sectionID' : '128391',
	'siteName' : 'FocusTimesHK - Desktop - (HK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008640',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1210,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var MarginRight = parseInt($("#outer-wrapper").css("marginRight"));
		var offSetRight = MarginRight + 20;
		$("#outer-wrapper").css({
			"position" : "relative"
		});
		if ($('body').hasClass('item')) {
			$("#outer-wrapper").css({
				"margin-top" : "0"
			});
		} else {
			$("#outer-wrapper").css({
				"margin-top" : "-20px"
			});
		}
		$("head").append("<style>.back-to-top{right: " + offSetRight + "px !important;}</style>");
		$("head").append("<style>#main-nav.fixed-nav{max-width: 1210px !important; margin:0 auto; right: 0; left: 0;}</style>");
	}
});
