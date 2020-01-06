integration.meta = {
	'sectionID' : '128471',
	'siteName' : 'CarList MY   - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1016617',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('html').addClass('inskinLoaded');
		var hHeight = $('.header').height();
		if ($(".header").length == 1 && $('.header').css("position") === "relative") {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -hHeight,
				plr_ScrollAdjustment : -hHeight
			});
			var stylesCSS = '<style type="text/css">';
			stylesCSS += '.inskinLoaded .header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
			stylesCSS += '</style>';
			$('head').append(stylesCSS);
		}
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #intercom-container .intercom-launcher-discovery-frame, .inskinLoaded #intercom-container .intercom-launcher-frame{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded .element-sticky-bottom{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .theme--listing main .container, .inskinLoaded .theme--news main .container{padding-left: 10px !important; padding-right: 10px !important;}}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .ad_unit--20, .inskinLoaded .ad_unit--10{margin-left: -20px !important;} .inskinLoaded .theme--listing .ad_unit--20, .inskinLoaded .ad_unit--10{margin-left: -10px !important;}}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .theme--news .ad_unit--20, .inskinLoaded .ad_unit--10{margin-left: -10px !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});
