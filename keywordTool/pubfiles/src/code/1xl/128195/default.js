integration.meta = {
	'sectionID' : '128195',
	'siteName' : 'CNG  - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '988190',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

function setWindow() {
	return currentWindow.top;
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on('layoutChange', function(e) {
	var navHeight = $('.main-nav').height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			integration.base.setCfg({
				plr_ScrollAdjustment : navHeight
			});
		} else{
			integration.base.setCfg({
				plr_ScrollAdjustment : 0
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://uk.ads.justpremium.com/adserve/js.php?zone=42554\"><\\script>";
};
