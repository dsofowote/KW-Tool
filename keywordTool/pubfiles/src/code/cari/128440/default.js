integration.meta = {
	'sectionID' : '128440',
	'siteName' : 'CARI BM infonet - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013635',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('#comiis_head').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($("#comiis_head").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#comiis_head");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -hHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #comiis_head{z-index: 999;}';
		stylesCSS += '.inskinLoaded .comiis_sidenv_box{z-index: 9999;}';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + hHeight + 'px;}';
		stylesCSS += '.inskinLoaded, .inskinLoaded .comiis_body{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded #comiis_foot_memu{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded .comiis_footer_scroll_show{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
	$(".ism-frame").parent().css({
		"z-index" : "102"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

