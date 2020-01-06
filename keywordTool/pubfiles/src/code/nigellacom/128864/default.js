integration.meta = {
    'sectionID' : '128864',
    'siteName' : ' Nigella - Desktop - (INT)',
    'platform' : 'desktop'
};

function setWindow() {
return currentWindow.top;
}

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1038825',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#footer").css({
			"max-width" : "1160px",
			"margin" : "0 auto"
		});
		$(".ad.billboard.from-desktop").css({
			"display" : "none"
		})
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().addClass("injected-advert");
});
