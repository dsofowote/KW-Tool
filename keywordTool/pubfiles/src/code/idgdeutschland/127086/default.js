integration.meta = {
	'sectionID' : '127086',
	'siteName' : 'PC Welt - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708037',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -46,
	"plr_FastInit" : "true",
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #page, .inskinLoaded #wrapper{overflow:visible;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

//For landscape and portrait rules
integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;

	var stylesCSS = '<style id="inskinScroll" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.ScrollEvents();
	$(window).bind('scroll', function() {
		integration.custom.ScrollEvents();
	});

	integration.custom.layChange();
	$(window).on('resize', function() {
		integration.custom.layChange();
	})
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});

integration.custom.ScrollEvents = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var pagebottom = (docheight - winheight) - 20;

	if ($(window).scrollTop() > pagebottom) {
		var newValue = ".inskinLoaded .socialMedia {margin-bottom: " + integration.custom.FrameTop + "px}";
	} else {
		var newValue = ".inskinLoaded .socialMedia {margin-bottom:0px}";
	}
	document.getElementById("inskinScroll").innerHTML = newValue;
}

integration.custom.layChange = function() {
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var contentWidth = winWidth - integration.custom.FrameSideRight;
	var newValue = '.inskinLoaded #teasersliderbox div ul li{max-width:' + contentWidth + 'px;min-width:' + contentWidth + 'px;margin-right:' + integration.custom.FrameSideRight + 'px}';

	if (winWidth > winHeight) {
		newValue += '.inskinLoaded .OUTBRAIN{max-width: ' + contentWidth + 'px}';
		newValue += '.inskinLoaded .socialMedia .socialButton {margin-right:1.5vw;margin-left:1.5vw;}';
	} else {
		newValue += '.inskinLoaded .socialMedia .socialButton {margin-right:0.5vw;margin-left:0.5vw;}'
	}
	document.getElementById("inskinStyles").innerHTML = newValue;
}
