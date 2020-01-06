integration.meta = {
	'sectionID' : '127567',
	'siteName' : 'Techly- Smartphone- (AU)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '750246',
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
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .bodywrap{padding-top: 0;}';
		stylesCSS += '.inskinLoaded #mobile-banner-a{height: 0; padding: 0 !important;}';
		stylesCSS += '.inskinLoaded body .post .images .mainimage img{height: initial;}';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body{min-width: 0px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var winWidth = $(window).width();
	//var winHeight = $(window).outerHeight();
	var contentWidth = winWidth - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded #navwrap, .inskinLoaded .bodywrap{max-width: " + contentWidth + "px;}</style>");
}

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\t\t\tgoogletag.pubads().definePassback('/1005256/Techly-ROS-StandardBanner-Mobile-1', [[300, 50], [320, 50]]).setTargeting('passback', 'true').display().set(\"page_url\", \"techly.com.au\");\n\t\t<\\script>";
};
