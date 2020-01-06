integration.meta = {
   'sectionID' : '125429',
   'siteName' : 'NME - Desktop - (INT exc. UK)',
   'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460],
	'browser_resolution' : [1460]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '707318',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass("keystone-premium-inskin"); // Adding a custom class provided by the publisher
	}
});

integration.on("adServed", function(e) {
	headerJS.resizeNav(); // Calling a custom function provided by the publisher to active their functionallity on the navigation
});

integration.custom.hide = function(e) {
	var windowSize = window.innerWidth;
	// Hide Pageskin whenever the user shrinks down the browser below 1460px, remove their custom class so it can continue with their responsiveness and hide the billboard slot.
	if (windowSize <= 1459) {
		$('body').removeClass("keystone-premium-inskin");
		integration.base.hideAd();
		var newvalue = '.inskinanchor, .has-adverts .header-advert-wrapper, .has-adverts .header-advert.is-absolute{height: 0 !important;}';
		document.getElementById('inskinStyles').innerHTML = newvalue;
	} else {
		// Show Pageskin whenever the user goes beyond 1460px and add their custom class so it can squeeze the content to the appropriate width.
		$('body').addClass("keystone-premium-inskin");
		integration.base.showAd();
		var newvalue = '.inskinanchor{height: ' + integration.custom.FrameTop + 'px !important;}';
		document.getElementById('inskinStyles').innerHTML = newvalue;
	}
};

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	$(".ism-frame").parent().addClass("inskinanchor");
	var stylesCSS = '<style type="text/css" id="inskinStyles">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	// Execute our custom hide/show function on resize and layout change
	integration.custom.hide();
	window.addEventListener("resize", function(event) {
		integration.custom.hide();
	}, false);
});

/* Custom TimeInc Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
