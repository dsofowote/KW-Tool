integration.meta = {
   'sectionID' : '127189',
   'siteName' : 'Timeout Penang - Smartphone - (MY)',
   'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707540',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".js-header-ad-wrapper").css({
			"display" : "none"
		});
		$(".hub-page .tile_medium").css({
			"margin-left" : "-5px",
			"padding-right" : "0",
			"padding-left" : "0",
			"width" : "300px !important"
		});
		$('head').append('<style type="text/css">.tile_ad {width: 300px !important;}</style>');
		$(".tile").css({
			"overflow" : "visible"
		});
	}
});

integration.on('layoutChange', function(e) {
	var frameright = e.data.plr_FrameSideRight;
	$("head").append("<style>.sticky-xs{width: calc(100% - " + frameright + "px) !important;}</style>");
	console.log("width" + frameright);
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6717330/Time_Out_Penang//pageskin', [[1, 1], [1920, 1080]]).display();\n<\\script>";
};