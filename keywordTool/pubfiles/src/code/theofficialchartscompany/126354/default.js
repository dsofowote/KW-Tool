integration.meta = {
	'sectionID' : '126354',
	'siteName' : 'The Official Charts - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708121',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	'plr_Responsive' : true,
	"plr_ShowCloseButton" : true,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOWgA1yOWgA1yAKABBENBxoAAAAiCALgAUABYAFQALgAZABAAEQAI8ATgBPAEsAQgAwI",
	'plr_FixedCloseButton' : true,
	'plr_PageScanExclude' : ' .site-header, .site-footer, #conversation '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var width = $(window).width() - integration.custom.FrameSideRight;
		var dWidth = width / 5;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {min-width: 200px;}';
		stylesCSS += '.inskinLoaded .sumome-share-client-wrapper.sumome-share-client-wrapper-mobile-bottom-bar{max-width: ' + width + 'px !important;}';
		stylesCSS += '.inskinLoaded .sumome-share-client-animated{max-width: ' + dWidth + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$("body").removeClass("inskinLoaded");
});


 /* Passback Tag */
 window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"//uk.ads.justpremium.com/adserve/js.php?zone=58173\"><\\script>\n";
};