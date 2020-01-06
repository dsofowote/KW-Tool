integration.meta = {
	'sectionID' : '128578',
	'siteName' : 'Teleloisirs - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1450]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1024060',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1190,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

		$("#page").css({
			"max-width" : "1190px",
			"margin" : "0 auto"
		});

		$("header#header ").css({
			"left" : "0px",
			"right" : "0px"
		});

		$("head").append("<style>header#header.fixed{margin:0px;max-width:100%}#wrapperPlayer{right:" + integration.custom.FrameSideRight + "px !important}</style>");

	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});
