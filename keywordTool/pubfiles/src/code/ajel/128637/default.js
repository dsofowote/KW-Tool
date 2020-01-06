integration.meta = {
	'sectionID' : '128637',
	'siteName' : 'Ajel - (Smartphone) - (KSA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1027927',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".header").height() + $(".sub-navigation").height()
		if ($("body .main").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body .main");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headHeight
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .at-share-dock.atss{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; margin-right: 74px !important;}';
		stylesCSS += '.inskinLoaded .header, .inskinLoaded .navigation, .inskinLoaded .sub-navigation{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important; margin-right: -' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded .news-strip, .inskinLoaded .search_header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important; margin-right: -' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded .wrapper{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .side_slideshow{margin-top: 20px !important;}';
		stylesCSS += '.inskinLoaded .slider-overlay {width: 87% !important; padding-right: 5px !important} #floating-button {right: 75px!important} .ampstart-headerbar-icon-wrapper {top:120px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});

integration.on('layoutChange', function(e) {
	var stylesCSS = '<style type="text/css" id="inskinStyles">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			var newvalue = '.inskinLoaded .at-share-dock.atss{z-index: 9;}';
			document.getElementById('inskinStyles').innerHTML = newvalue;

		} else {
			var newvalue = '.inskinLoaded .at-share-dock.atss{z-index: 100;}';
			document.getElementById('inskinStyles').innerHTML = newvalue;
		}
	});
});
