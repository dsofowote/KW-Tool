integration.meta = {
	'sectionID' : '127898',
	'siteName' : 'Breaking News - IE - Smartphone - (IE UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '920747',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_FastInit" : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #rightArrow{right: ' + integration.custom.FrameSideRight + 'px;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	if (windowWidth <= 375) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .archives li{margin-left: 8px}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});
