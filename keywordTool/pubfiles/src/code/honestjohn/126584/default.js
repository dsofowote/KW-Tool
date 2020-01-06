integration.meta = {
	'sectionID': '126584',
	'siteName': 'Honest John - Smartphone - (UK)',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '707414',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_GetContentHeightVersion': 2,
	"plr_Responsive": true,
	"plr_ShowCloseButton": true,
	'plr_FastInit': true,
	'plr_PageScanExclude' : ' #main-nav, .links, #rightContent '
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #page_content{padding-top:20px;}';
		stylesCSS += '.inskinLoaded #page_header{position:relative;}';
		stylesCSS += '.inskinLoaded .toptenMainImage{margin-top:50px;}';
		stylesCSS += '.inskinLoaded .reviewImagesBottom.toptenThumbs{margin-left:6px;}';
		stylesCSS += '.inskinLoaded #page_content, .inskinLoaded #page_header, .inskinLoaded #page_footer {max-width:' + (windowWidth - integration.custom.FrameSideRight) + 'px}';
		if (windowWidth < 375) {
			stylesCSS += '.inskinLoaded #page_header img{width:75%;}';
		} else {
			stylesCSS += '.inskinLoaded #page_header img{width:85%;}';
		}
		stylesCSS += '.inskinLoaded{padding-right:74px;}';
		stylesCSS += 'html{padding-right:0px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
			integration.base.setCfg({
				'plr_FixedTop': true,
				'plr_EnableSwipe': true
			});
		}

	}
});


integration.on('layoutChange', function (e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laydetect();
	$("head").append("<style>.inskinLoaded #menuButton{right:0px;left:initial}</style>");

	$(window).on('resize', function () {
		integration.custom.laydetect();
	});
});

integration.custom.laydetect = function () {
	/*Ensuring gallery fits within content*/
	var wwidth = $(window).width();
	var wheight = $(window).height();
	var wcontent = wwidth - integration.custom.FrameSideRight
	var gal1 = $(".toptenThumbNumber").width();
	var galwidth = wcontent - gal1;

	if (wwidth > wheight) {
		$("head").append("<style>.inskinLoaded .reviewImagesBottom.toptenThumbs{width: " + galwidth + "px;}</style>");
	} else {
		$("head").append("<style>.inskinLoaded .reviewImagesBottom.toptenThumbs{width: " + galwidth + "px;}</style>");
	}
}
integration.on("adClose", function (e) {
	$("body").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script>\nwindow.top.postMessage({action:'passback',keyword:'inskin_banner'}, '*');\nwindow.top.postMessage({action:'passback',keyword:'inskin_floating'}, '*');\n<\\script>";
};