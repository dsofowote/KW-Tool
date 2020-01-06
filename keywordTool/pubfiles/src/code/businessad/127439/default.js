integration.meta = {
	'sectionID' : '127439',
	'siteName' : 'Boerse Online - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721525',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.social_wrapper{margin-right:-10px !important}.nav-bg.navbar-default{top:0px !important;margin-top:0px !important}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;

	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});

	$(".wallpaper_top.hidden-xs").css({
		"height" : "0px"
	});

	$(".nav-bg.navbar-default").css({
		"top" : integration.custom.PageSkinTopPanel
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	var headHeight = $('.header.hidden-xs').outerHeight();
	var bannerHeight = $('.wallpaper_top.hidden-xs.hidden-sm').outerHeight();
	var change = headHeight + integration.custom.PageSkinTopPanel;

	if (height < change) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$(".nav-bg.navbar-default").css({
			"padding-top" : change
		});
		var newValue = '.inskinLoaded .nav-bg.navbar-default{position:absolute !important}';
	} else {
		$(".nav-bg.navbar-default").css({
			"padding-top" : "0px"
		});
		var newValue = '.inskinLoaded .nav-bg.navbar-default{position:fixed !important}';
	}
	document.getElementById("inskinStyles").innerHTML = newValue;

}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "9999999"
	});
});
