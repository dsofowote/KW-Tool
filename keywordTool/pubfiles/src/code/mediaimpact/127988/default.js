integration.meta = {
	'sectionID' : '127988',
	'siteName' : 'Stylebook - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '964375',
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
		var contentWidth = $('body').innerWidth();
		integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
		var headerWidth = $(window).width();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .container{min-width: 0px!important; padding: 0px;}';
		stylesCSS += '.inskinLoaded .mashsb-container{display: flex;}';
		stylesCSS += '.inskinLoaded #header--small{z-index: 520000000;}';
		stylesCSS += '.inskinLoaded #mashbar-header{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important; margin: 0 !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard #mrec > .oneTag{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard #mrec #mrec_bannerCont{margin: 0 !important;}';
		stylesCSS += '.inskinLoaded .ads{margin: 0 !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard #mrec_btf .oneTag{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded .ads #mrec_btf #mrec_btf_bannerCont, .inskinLoaded #banner_bannerCont{margin: 0 !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard #mrec #banner{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard .ads .oneTag{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard .ads iframe{min-width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded #ads--billboard .ads #mrec{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
		stylesCSS += '.inskinLoaded .td-widget > iframe{width: 100% !important;}';
		stylesCSS += '.inskinLoaded .ads__container{margin-left: -10px;}';
		stylesCSS += '.inskinLoaded #ads--billboard, .inskinLoaded #ads--billboard2{margin-bottom: 5px !important;}';
		stylesCSS += '.inskinLoaded .ob-unit.ob-rec-text{max-height: none !important;}';
		stylesCSS += '.inskinLoaded #header--small, .inskinLoaded #header--large{max-width: ' + headerWidth + 'px !important;}';
		
		
		
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9999999"
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 200);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 200);
});
