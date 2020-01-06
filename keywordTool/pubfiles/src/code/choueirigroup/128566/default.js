integration.meta = {
	'sectionID' : '128566',
	'siteName' : 'Kooora - Smartphone- (MENA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1023808',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var windowWidth = $(window).width();
		var contentWidth = windowWidth - integration.custom.FrameSideRight;
		var headHeight = $("#header").outerHeight();
		console.log(integration.custom.FrameSideRight, windowWidth);

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #sideMenu{max-width:' + contentWidth + 'px;top:' + (integration.custom.FrameTop + headHeight) + 'px !important}';
		//stylesCSS += '.inskinLoaded #Leaderboard, .inskinLoaded #Leaderboard > *, .inskinLoaded #Leaderboard iframe{height:0px !important;padding:0px;margin:0px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

