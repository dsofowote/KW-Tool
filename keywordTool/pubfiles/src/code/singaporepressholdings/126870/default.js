integration.meta = {
	'sectionID' : '126870',
	'siteName' : 'HerWorld Plus - Smartphone - (SG) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707680',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50,
	'plr_StartScrollOnAnchor' : true,
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .ad-mpu{margin-left: -15px;}';
		stylesCSS += '.inskinLoaded .fb_iframe_widget span{position: relative; left: -15px;}';
		stylesCSS += '.inskinLoaded #mini-panel-node_related, .inskinLoaded #mini-panel-latest_in_section{margin-left: -20px;}';
		stylesCSS += '.inskinLoaded .form-wrapper{margin-left: -10px !important; max-width: 200px !important;}';
		stylesCSS += '.inskinLoaded .main-container.container, .inskinLoaded .panel-panel, .inskinLoaded .panel-pane{padding-left: 0px; padding-right: 0px;}';
		stylesCSS += 'body.inskinLoaded{padding-right: 0px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		$("head").append("<style id='ismScrollingNav'></style>");
		$("head").append("<style id='ismStyles'></style>");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
	window.dispatchEvent(new Event('resize'));

	integration.custom.scrollingNav();
	$(window).on('scroll', function() {
		//This do not remove this -- Function is used to adjust the fixed close buttons position based on if the nav is present
		//Will need this if publisher asks to go under nav
		//integration.custom.scrollingNav();
	});

});

integration.custom.scrollingNav = function() {
	var navPresent = $("#navbar .container.affix").css("display") == "none";
	var closeButtonTop = $("#navbar").outerHeight();

	if (navPresent) {
		integration.base.setCfg({
			plr_ScrollAdjustment : 45
		});

	} else {
		integration.base.setCfg({
			plr_ScrollAdjustment : 115
		});
	}
}

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var newValue = ".inskinLoaded #navbar .container.affix{max-width:" + contentWidth + "px}"
	$("#ismStyles").html(newValue);

	//extra 5px to stop nav from touching the edge
	$("head").append("<style>.inskinLoaded #navbar{min-width: " + (wwidth - 5) + "px; min-height: 100px !important;}</style>");

}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
	window.dispatchEvent(new Event('resize'));
});
