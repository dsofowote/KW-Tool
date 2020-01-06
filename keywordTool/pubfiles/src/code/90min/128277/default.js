integration.meta = {
	'sectionID' : '128277',
	'siteName' : '90min - Smartphone - (DE)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '999411',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adServed', function(e) {
	var hh1 = $(".nav__wrapper").outerHeight();
	var hh2 = $("#site-header").outerHeight();
	var navHeight = $('#site-header > div.header-container').height();
	
	$(".ism-frame").parent().css({
		"margin-top" : hh1 + hh2 + navHeight + 10
	});
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -49,
			});
		}

		$('head').append('<style type="text/css">#site-header, .page-topic {margin-top: 0 !important;}</style>');
		$("[id^=div-gpt-ad]").css({
			"margin-left" : "-14px"
		});

		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded{overflow-x:visible !important;}';
		stylesCSS += '.inskinLoaded #site-header{z-index:999999;max-width:calc(100% - ' + e.data.plr_FrameSideRight + 'px);}';
		stylesCSS += '.inskinLoaded #site-header, .inskinLoaded .page-topic{margin-top:0 !important;}';
		stylesCSS += '.inskinLoaded [id^=div-gpt-ad]{margin-left:-14px;}';
		stylesCSS += '.inskinLoaded .page-wrap{margin-top:0 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .bottom-social{right:' + (13 + e.data.plr_FrameSideRight) + 'px; bottom:45px;}';
	stylesCSS += '.inskinLoaded div > .ism-frame{z-index:5000;}';
	stylesCSS += '.inskinLoaded .video-gallery__container__article .video__header{left: 26vw !important; width: 51vw !important;}';
	stylesCSS += '.inskinLoaded #cnx-fullScreen-container {right:' + (integration.custom.FrameSideRight + 10) + 'px !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded .vjs-tech.sr-video--no-poster{max-width " + contentWidth + "}</style>");
}