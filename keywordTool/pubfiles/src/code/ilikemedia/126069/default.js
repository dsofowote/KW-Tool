integration.meta = {
	'sectionID' : '126069',
	'siteName' : 'Livestrong - Desktop',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]//1280
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706767',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("header, #footer, #privacy-policy").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});

		$("head").append("<style>.top_header--fixed{left:0px;right:0px} .article_body{top:15px !important;}</style>");
		
		$(".container.container--hubpage").css({
			"max-width" : "1020px",
			"margin" : "auto"
		});
	}
});

integration.on('layoutChange', function(e) {
	setTimeout(function() {
		$(".slick-next.slick-arrow").trigger("click");
	}, 100);
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000001"
	});
});
