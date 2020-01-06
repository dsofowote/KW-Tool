integration.meta = {
	'sectionID' : '128312',
	'siteName' : 'Soccerway - Desktop - ( DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1370]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1002165',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".banner-content, #site-header, #ft").css({
			"max-width" : "1040px",
			"margin" : "0 auto"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/67970281/DISPLAY_OWNED_PASSBACKS_GBL/Soccerway/ROS/SKIN\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
}; 