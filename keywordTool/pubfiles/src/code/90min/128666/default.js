integration.meta = {
	'sectionID' : '128666',
	'siteName' : '90min.com/it - Smartphone - (IT) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029127',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var navHeight = $('#site-header > div.header-container').height() + $(".mobile-nav-main-wrapper").height() + $(".ad--fixed").height();
		if ($("#site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -navHeight
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded{overflow-x:visible !important;}';
		stylesCSS += '.inskinLoaded [id^=div-gpt-ad]{margin-left:-14px;}';
		stylesCSS += '.inskinLoaded .page-wrap{margin-top:0 !important;}';
		stylesCSS += '.inskinLoaded .page-topic__single-title{height: 6.25rem !important;}';
		stylesCSS += '.inskinLoaded .page-topic{height: 17.5rem !important;}';
		stylesCSS += '@media only screen and (max-width: 374px) {.inskinLoaded .page-topic{height: 18.5rem !important;} .inskinLoaded .page-topic__single-title{height: 7.25rem !important;}}';
		stylesCSS += '@media only screen and (max-width: 374px) {.inskinLoaded .social-header{width: 105% !important; margin: 0 auto;} .inskinLoaded .articles-grid--long .article{padding: .5rem !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$('#inskinanchor').css({
			'margin-top' : navHeight
		});
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
	$("#inskinanchor").remove();
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded .vjs-tech.sr-video--no-poster{max-width " + contentWidth + "}</style>");
};

