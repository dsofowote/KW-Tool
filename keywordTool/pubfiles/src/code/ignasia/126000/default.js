integration.meta = {
    'sectionID' : '126000',
    'siteName' : 'IGN Asia - (Creative Approval) - Desktop - ( ID MY PH SG TH VN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706673',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1115,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$(".main, #header").css({"width": "1096px", "margin": "0 auto"});
    }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99"
	});
});
