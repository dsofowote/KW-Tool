integration.meta = {
	'sectionID' : '128444',
	'siteName' : 'URDU POINT - Smartphone - (MENA) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013575',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $("header").height();
		$("<div id='inskinanchor'></div>").insertBefore("#main_wrap");
		integration.base.setCfg({
			plr_AnchorParent : "#inskinanchor",
			plr_PageHeightAdjustment : -headHeight
		});

		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var wWidth = $(window).width();
		cWidth = wWidth - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded div#o-wrapper, .inskinLoaded #main_wrap{overflow: visible;}';
		stylesCSS += '.inskinLoaded .at-share-dock.atss{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; right: auto !important; z-index: 9 !important;}';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + headHeight + 'px !important;}';
		stylesCSS += '.inskinLoaded .header{margin-top: 0px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

