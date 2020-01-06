integration.meta = {
	'sectionID' : '127958',
	'siteName' : 'Boursier.com - Desktop - ( FR )',
	'platform' : 'desktop'
};





integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '956645',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -137
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body .page-head").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body .page-head");
			integration.base.setCfg({ 
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -195,
			});
		}
		$("#overall > section, .page-footer, #pub-footer, #banner-wrapper").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$(".page-head").css({
			"margin-bottom" : "15px"
		});
		$("body").css({
			"overflow" : "visible"
		});
		$("#banner-wrapper").css({
			"display" : "none"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=21240\"><\\script>";
};