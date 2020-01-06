integration.meta = {
	'sectionID' : '127602',
	'siteName' : 'Nova Entertainment Network - Smartphone- (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [360]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '762977',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 76,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#nova-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nova-header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -116
			});
		}

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .node-type-nova-show{width:100%}';
		stylesCSS += 'body.inskinLoaded {overflow-x:visible;width:100%;}';
		stylesCSS += '.inskinLoaded .section-just-in .image-date{flex-basis: 100px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameRight = e.data.plr_FrameSideRight;
	var newWidth = integration.custom.FrameRight * 2;
	var width = $(window).width();

	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .region-on-air{width:calc(100% ' + newWidth + 'px)}';
	stylesCSS += '.inskinLoaded #nova-header{width:' + width + 'px}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.buttonFix();
	$(window).on("resize", function() {
		integration.custom.buttonFix();
	});

	$(".ism-frame").parent().css({
		"z-index" : "13"
	});
});

integration.custom.buttonFix = function() {
	var width = $(window).width();
	var contentWidth = width - integration.custom.FrameRight;

	var newValue = ".on-air-player{max-width: " + contentWidth + "px}"
	document.getElementById("inskinStyles").innerHTML = newValue;
};

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/7426/NovaFM', [[1,1]]).setTargeting(\"Keyword\", \"inskin_test\") .setTargeting(\"pos\", \"1\")\n.display();\n<\\script>";
};
