integration.meta = {
	'sectionID' : '128498',
	'siteName' : '24h - Smartphone - ( US VN )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1018532',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var headHeight = $("#topnav").height();
		if ($("#topnav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#topnav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative",
			"z-index" : "10000000"
		});

		var mpuMargin = $(".blk").css("padding-left");
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .icoQkOpn, .inskinLoaded #arrowPageUp{right: ' + (integration.custom.FrameSideRight + 5) + 'px;}';
		stylesCSS += '.inskinLoaded #banner_on_page_container, .inskinLoaded section[id^="ADS"]{margin-left: -' + mpuMargin + ' !important;}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded #topnav{z-index: 10000001 !important;}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';
		stylesCSS += '.inskinLoaded {}';

		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
