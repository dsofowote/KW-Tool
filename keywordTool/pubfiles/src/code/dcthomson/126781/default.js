integration.meta = {
	'sectionID' : '126781',
	'siteName' : 'Evening Telegraph - (SSL) - Smartphone - (UK) ',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {


	'mf_siteId' : '707092',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.leaderboard').hide();
	}

	//There is a widget on the page that contains an element with a 560px width.
	$('#jobsinscotland-2').css({
		'overflow' : 'hidden'
	});

});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.sharedaddy.fix{max-width : calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/4987/passbacks/evening-telegraph-passbacks/ET-inskin_passbacks', [[2, 2], [970, 250], [300, 250]]).display();\n<\\script>";
};
