integration.meta = {
	'sectionID' : '127962',
	'siteName' : ' Football.fr-Desktop-FR  ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '956649',
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
		if ($(document).scrollTop() == 0) {
			$('#header').removeClass('header-fixed');
			$('aside').removeClass('fixed');
		}
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
	
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=13213\"><\\script>";
};
