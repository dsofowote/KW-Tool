integration.meta = {
	'sectionID' : '127490',
	'siteName' : 'Cruise Passenger - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '727025',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50,
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #cb-top-menu{position:fixed;top:0px}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var headHeight = $('#cb-top-menu').outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : "50px"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = ".inskinLoaded .cb-footer-lower, .inskinLoaded .cb-top-menu-wrap{max-width: " + contentWidth + "px}";
	document.getElementById("inskinStyles").innerHTML = newValue
}
