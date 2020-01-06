integration.meta = {
	'sectionID' : '126340',
	'siteName' : 'Dailymash - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.channelHome = ['/news.html', '/sport.html', '/politics.html', '/opinion.html', '/features/agony-aunt.html', '/features/horoscopes.html', '/mash-books.html', '/'];

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706806',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_URLKeywords" : 2,
	"plr_FastInit" : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_PageScanExclude' : ".beta, #bottom_modules, .TaboolaMobile"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .at-share-dock.atss{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded .InSkinHide{display: none !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/4183072/DailyMash_InSkinPASSBACK_320x50\" height=\"50\" width=\"320\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};

