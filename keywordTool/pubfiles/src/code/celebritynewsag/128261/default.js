integration.meta = {
	'sectionID' : '128261',
	'siteName' : 'Promiflash - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '994945',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20,
	'plr_StartScrollOnAnchor' : true,
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOX1iX_OX1iX_AKABBENBxoAAAAiCALgAUABYAFQALgAZABAADIAIkATgBPAEsAQgAwI'
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50,
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded header{margin-bottom:0px;}';
		stylesCSS += 'body .inskinLoaded {padding-bottom:0px;}';
		stylesCSS += '.inskinLoaded header .search{margin-left:5px;}';
		stylesCSS += '.inskinLoaded .cookieBanner{width:' + cwidth + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		window.unloadPageskin = function() {
			try {
				integration.destroy();
				return true;
			} catch(e) {
			};
		};

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
	$("head").append("<style>.inskinLoaded header{calc(100% + " + integration.custom.FrameSideRight + "px);}</style>");
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
	try {
		integration.destroy();
	} catch(e) {
	};
});
