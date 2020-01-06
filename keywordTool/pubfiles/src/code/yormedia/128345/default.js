integration.meta = {
	'sectionID' : '128345',
	'siteName' : 'Planet Rugby - Smartphone - (INT)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1005223',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .advert--leaderboard{display:none}';
		if (windowWidth >= 375) {
			stylesCSS += '.inskinLoaded .header__logo{max-width:195px;top:3px;}';
		}
		stylesCSS += '.inskinLoaded #siteContainer{top:0px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		var menuToggle = false;
		$("#menuTrigger").click(function() {
			if (menuToggle) {
				menuToggle = false;
				integration.base.showAd();
			} else {
				menuToggle = true;
				integration.base.hideAd();
			}
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/134356868/Planet_Sports/Planet_Rugby/Inskin_Mobile_Passback', [320, 50]).display();\n<\\script>";
};
