integration.meta = {
	'sectionID' : '128036',
	'siteName' : 'Joe - UK - Smartphone - (UK)',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '970863',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	//"plr_GetContentHeightVersion": 2,
	"plr_ConsentTimeout" : 3
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');

		var headHeight = $("header.header").height() + $(".navigation-trending").height();
		if ($("header.header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header.header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .article-page{padding-top: 60px!important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		$("head").append("<style>.inskinLoaded .article-page{padding-top:60px!important;}</style>");
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
