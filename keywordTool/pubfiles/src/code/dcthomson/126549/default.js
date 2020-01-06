integration.meta = {
	'sectionID' : '126549',
	'siteName' : 'Evening Express - (SSL) - Smartphone- (UK)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707020',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #side-bar div{width: auto;}';
		stylesCSS += '.inskinLoaded .sharedaddy, .inskinLoaded .fix{position: initial;}';
		stylesCSS += '.inskinLoaded .wpc-dfp-onebyone, .inskinLoaded .wpc-dfp-twobyone, .inskinLoaded .leaderboard{height: 0px}';
		stylesCSS += '.inskinLoaded .leaderboard{display: none !important;}';
		stylesCSS += '.inskinLoaded .columns{padding-left: 0.6rem; padding-right: 0.6rem}';
		stylesCSS += '.inskinLoaded div.dfp-ad, .inskinLoaded [id^="div-gpt-ad-"], .inskinLoaded [id^="google_ads_"] {display: none;}';
		stylesCSS += '.inskinLoaded .billboard-ad {display: none;}';
		var winWidth = $(window).width();
		if (winWidth <= 320) {
			stylesCSS += '.inskinLoaded #masthead a.home-logo{margin-left: 5px;}'
		}
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/evening-express-passbacks/EE-inskin_passbacks', [[2, 2], [300, 250], [970, 250]]).display();\n<\\script>";
};
