integration.meta = {
	'sectionID' : '126871',
	'siteName' : 'Luxury Insider - Smartphone - (SG) ',
	'platform' : 'smartphone'
};

integration.telemetry.setup({
	'url' : true,
});

integration.testParams = {
	'mobile_resolution' : [407]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707112',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true,
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .advert-leaderboard{margin:0px;}';
		stylesCSS += '.inskinLoaded .search-trigger{margin-top:47px;}';
		stylesCSS += 'body.inskinLoaded{padding-right: 0px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = '.inskinLoaded .mainslider .view-main-slider ul li{width:' + contentWidth + 'px !important;';
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

