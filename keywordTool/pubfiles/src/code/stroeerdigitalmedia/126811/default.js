integration.meta = {
	'sectionID' : '126811',
	'siteName' : 'Menshealth - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707121',
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
		var contentWidth = $(window).width() - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded {overflow-x: visible;}';
		stylesCSS += '.inskinLoaded .mps-wrap{overflow: hidden;}';
		stylesCSS += '.inskinLoaded #at-share-dock{width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}';
		stylesCSS += '.inskinLoaded #mps-photo-gallery-slider > div.rsOverflow.grab-cursor{width: ' + contentWidth + 'px !important;}';
		stylesCSS += '.inskinLoaded button.ism-close{padding: 0px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000201"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
