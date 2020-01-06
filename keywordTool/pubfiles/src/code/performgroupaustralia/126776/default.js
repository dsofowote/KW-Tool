integration.meta = {
	'sectionID' : '126776',
	'siteName' : 'V8Supercars - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707085',
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
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded.mobile-menu-open header, .inskinLoaded.mobile-menu-open .cd-main-content{transform: translate3d(-190px, 0, 0); -webkit-transform: translate3d(-190px, 0, 0);}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\tgoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n\t\twindow.frameElement.width = event.size[0];\n\t\twindow.frameElement.height = event.size[1];\n\t});\n\tgoogletag.pubads().definePassback('/67970281/display_thirdparty_au/supercars_responsive', [320, 50]).setTargeting('Display_Passback', ['InSkin']).display();\n<\\script>";
};

