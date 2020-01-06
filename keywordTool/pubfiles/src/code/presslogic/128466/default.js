integration.meta = {
	'sectionID' : '128466',
	'siteName' : 'Press Logic - (Creative Approval) - Smartphone - ( HK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1015718',
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
		var wWidth = window.innerWidth;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var TotalHeight = wWidth - integration.custom.FrameSideRight;
		var hHeight = $('#header').height();
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -hHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #header{top: 0 !important;}';
		stylesCSS += '.inskinLoaded #tmp-header{height: 0 !important;}';
		stylesCSS += '.inskinLoaded #back-top{right: ' + integration.custom.FrameSideRight + 'px !important; z-index: 9 !important;}';
		stylesCSS += '.inskinLoaded .pinned-post .meta-image img, .inskinLoaded .pinned-post .meta-image:after{width: ' + TotalHeight + 'px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		$('#inskinanchor').css({
			"margin-top" : hHeight,
			"position" : "relative",
			"z-index" : "99"
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});
