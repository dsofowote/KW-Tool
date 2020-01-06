integration.meta = {
	'sectionID' : '127404',
	'siteName' : 'Autosport - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.channelHome = ['/f1.html', '/fe.html', '/indycar.html', '/f2.html', '/gp3.html', '/motogp.html', '/moto2.html', '/moto3.html', '/tt.html', '/gt.html', '/imsa.html', '/wrc.html', '/erc.html', '/dakar.html', '/wtcc.html', '/btcc.html', '/dtm.html', '/supercars.html', '/wrx.html', '/national.html', '/other.html', '/perfomance.html', '/reviews.html'];

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '718474',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_PageHeightAdjustment' : -10,
	'plr_PageScanExclude' : ".OUTBRAIN, .grid.footer"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#main-menu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#main-menu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #offCanvasContentContainer{padding-top:0px !important;}';
		stylesCSS += '.inskinLoaded .wrapper, .inskinLoaded .body{overflow:visible}';
		stylesCSS += '.inskinLoaded .MPU_container.mobile{position:relative;right:10px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		$("body").addClass("inskinLoaded");
	}
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});
