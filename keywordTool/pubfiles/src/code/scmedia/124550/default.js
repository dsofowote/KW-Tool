integration.meta = {
   'sectionID' : '124550',
   'siteName' : 'JMen - Desktop - (HK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1320]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707907',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1060,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	$('body').css({
		'height' : 'auto',
		'overflow-x' : 'visible'
	});
	$('#header, .region').css({
		'max-width' : '1060px',
		'margin' : '0 auto',
		'left' : '0',
		'right' : '0'
	});
	$('.ism-frame').parent().css({
		'z-index' : '1001'
	});
	$('div.view-header').css({
		'padding-left' : '5px'
	});
	$('#block-system-main-menu').css({
		'z-index' : '1002'
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/117295781/InSkin_JMENplus(Desktop)\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};