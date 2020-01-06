integration.meta = {
	'sectionID' : '128178',
	'siteName' : 'Argaam.com - Desktop - (MENA) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '987091',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1090,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

integration.on('layoutChange', function(e) {
	var wwidth = $(window).width();
	var discoverRight = (wwidth - 1090) / 2;
	$("head").append("<style>.discover-button{right: " + (discoverRight + 50) + "px !important;}</style>");
	$("head").append("<style>.discoverMenuHolder.open{right: " + discoverRight + "px !important; z-index: 102;}</style>");
	$("head").append("<style>.lightBoxBg{z-index: 101;}</style>");
});

