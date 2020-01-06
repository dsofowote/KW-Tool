integration.meta = {
	'sectionID' : '126759',
	'siteName' : 'Evoke - Smartphone - (IE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '708069',
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
		if ($(".td-header-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".td-header-container");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -44
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #td-outer-wrap{overflow:visible;}';
		stylesCSS += '.inskinLoaded .td-header-row{z-index:10001;}';
		stylesCSS += '.inskinLoaded .td-pb-row [class*="td-pb-span"]{padding-bottom:0px !important; margin-bottom: 0px !important;}';
		stylesCSS += '.inskinLoaded .td-header-row{}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .td-scroll-up{right:calc(" + integration.custom.FrameSideRight + " + 5)px;}</style>");
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});
integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

