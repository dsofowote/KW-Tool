integration.meta = {
	'sectionID' : '127266',
	'siteName' : 'Mac Welt - Smartphone - (DE) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707986',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : "true",
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded{min-width:0px}';
		stylesCSS += '.inskinLoaded #page, .inskinLoaded #wrapper{overflow:visible}';
		stylesCSS += '.inskinLoaded #ad_mobile_top{display:none;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = '.inskinLoaded .socialMedia{max-width: ' + contentWidth + 'px}';

	if (windowWidth < windowHeight){
		newValue += '.inskinLoaded #teasersliderbox, .inskinLoaded #teasersliderbox div ul li{width:' + contentWidth + 'px !important;margin-right:' + integration.custom.FrameSideRight + 'px}';
	}

	//Social bar fixed to bottom - width
	if (windowWidth < 360) {
		newValue += '.inskinLoaded #article .socialMedia .socialButton {margin:2% 0px}';
	} else if (windowWidth < 320) {
		newValue += '.inskinLoaded #article .socialMedia .socialButton {margin:2% -6px}';
	}
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});
