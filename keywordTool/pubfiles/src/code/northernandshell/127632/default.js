integration.meta = {
	'sectionID' : '127632',
	'siteName' : 'Daily Express - Smartphone - (Asia)',
	'platform' : 'smartphone'
};

/* Always disable the telemetry server & KW filters for Bauer or Northern and Shell Integrations */
integration.disableTelemetry = true;

integration.disableKWFilters = true;

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768489',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .social-buttons-and-comments{overflow: visible; margin-left: -10px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
