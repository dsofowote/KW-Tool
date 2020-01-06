integration.meta = {
	'sectionID' : '127961',
	'siteName' : 'Europe1Sports.fr - Smartphone - ( FR )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '956648',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body {overflow:visible}';
		stylesCSS += '.inskinLoaded #header{z-index:1000;}';
		stylesCSS += '.inskinLoaded #nav{z-index:1000 !important}';
		stylesCSS += '.inskinLoaded .wbtz-embed-main-sticky{z-index:99 !important}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var hh1 = $("#header").outerHeight();
	var hh2 = $(".sub-nav").outerHeight();
	var headHeight = hh1 + hh2;

	$(".ism-frame").parent().css({
		"top" : headHeight,
		"z-index" : "100"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.laychange();

	document.addEventListener('touchmove', function(e) {
		integration.custom.laychange();
	}, false);

});

integration.on("adClose", function(e) {
$("body").removeClass("inskinLoaded");
//$("#inskinanchor").remove();
});

integration.custom.laychange = function() {
	//Below code for positioning video carousel
	var widgetWidth = $(".wbtz-embed-main-sticky.wbtz-mobile").outerWidth();
	var widgetClosed = widgetWidth - integration.custom.FrameSideRight + 2;

	var newValue = ".inskinLoaded .wbtz-embed-main-sticky.wbtz-mobile.right.wbtz-show{right: " + integration.custom.FrameSideRight + "px !important}";
	newValue += ".inskinLoaded .wbtz-embed-main-sticky.wbtz-mobile.right.wbtz-show.wbtz-minimized{right:" + -widgetClosed + "px !important}";
	if ($('.wbtz-wrapper.wbtz-wrapper-xxs').css('left') > 100 + "px") {
		newValue += ".inskinLoaded .wbtz-wrapper.wbtz-wrapper-xxs{margin-left:-30px;}";
	} else {
		newValue += ".inskinLoaded .wbtz-wrapper.wbtz-wrapper-xxs{margin-left:0px;}";
	}
	document.getElementById("inskinStyles").innerHTML = newValue;
}

