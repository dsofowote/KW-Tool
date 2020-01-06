integration.meta = {
	'sectionID' : '126007',
	'siteName' : 'TFL - Desktop - (UK)',
	'platform' : 'desktop'
};


integration.testParams = {
	'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706710',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	// 'plr_CheckOptOut': true,
	// 'plr_ConsentString': "BOXVVKIOXVVKIAKABBENBxoAAAAiCAJAAWABUAC4AGQAZABEgCcAJ4BCADAg"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".page-header, .top-banner-advert, .cookie-policy-notice, .message-bar-style-1, .mainnav, #full-width-content, #footer").css({
			"max-width" : "1140px",
			"margin" : "0 auto"
		});
		//Moving the ad unit under Pageskin. This needs to be done dynamically once we have Frame values in the adCallResult
		$("body > div.top-banner-advert").css({
			"display" : "none"
		});
	}
});


/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/76889402/inskin_passback\" height=\"250\" width=\"970\"></div>\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
