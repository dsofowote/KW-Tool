integration.meta = {
	'sectionID' : '126538',
	'siteName' : 'What Culture - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
};

function setWindow() {
	return currentWindow.top;
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707732',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_URLKeywords" : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#app-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#app-nav");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 90,
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #app-nav{z-index: 9;}';
		stylesCSS += '.inskinLoaded .app-header__inner--sticky .app-dropdown-nav--multi.display{top:50px !important;}';
		stylesCSS += '.inskinLoaded .app-dropdown-nav--multi.display {top:82px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismSwitchWidth();
	$(window).on('resize', function() {
		integration.custom.ismSwitchWidth();
	});
});

integration.custom.ismSwitchWidth = function() {
	ismSwitchWidth = $(window).width();
	$("head").append("<style>.inskinLoaded #app-nav, .inskinLoaded #app-top-nav{width: " + ismSwitchWidth + "px;}</style>");
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "3"
	});
});
integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

