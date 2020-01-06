integration.meta = {
	'sectionID' : '128611',
	'siteName' : 'Quotidiano Di Puglia - Desktop - (IT)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1255]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026281',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 995,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#socialbar-promo{right: 0 !important;} .footer{margin-left: -15px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});
