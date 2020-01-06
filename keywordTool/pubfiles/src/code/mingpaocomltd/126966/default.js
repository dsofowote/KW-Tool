integration.meta = {
	'sectionID' : '126966',
	'siteName' : 'MingPao - (Channels) - Mobile - (HK)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707584',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_GetContentHeightVersion" : 2,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var totalWidth = wWidth - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .bgcolor{width: inherit;} .inskinLoaded #share_wrap{width: initial;}';
		stylesCSS += '.inskinLoaded .share_wrapper2{margin-left: 0px;}';
		stylesCSS += '.inskinLoaded {overflow-x: visible !important;}';
		stylesCSS += '.inskinLoaded table{width: ' + (totalWidth - 44) + 'px !important;}'; //subtracting padding and margin from both sides from the width
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "2000"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
