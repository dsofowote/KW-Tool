integration.meta = {
	'sectionID' : '128543',
	'siteName' : 'My Dr - Smartphone- (INT)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1021764',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .at-share-dock.atss{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important; z-index: 9 !important;}';
		stylesCSS += '.inskinLoaded .footer-sitelinks{padding: 0px !important;}';
		stylesCSS += '@media only screen and (max-width: 360px) {.inskinLoaded .navbar-brand{padding: 25px 10px 15px !important;}}';
		stylesCSS += '@media only screen and (max-width: 360px) {.inskinLoaded .feature-slider-container{padding: 20px 0 !important;} .inskinLoaded .prop-item{padding: 5px !important;}}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .blog-item .media{padding: 0 !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99"
	});
});
