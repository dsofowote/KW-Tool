integration.meta = {
	'sectionID' : '128585',
	'siteName' : 'Stuff.tv - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1024368',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#page").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});

		$("head").append("<style>#header.stickynav-active .red .container, #header.stickynav-active .over .container{margin:0px}</style>");
	}
});

integration.on('adServed', function(e) {
	//To overlap header
	$(".ism-frame").parent().css({
		"z-index" : "100000000"
	});
});
