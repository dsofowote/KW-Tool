integration.meta = {
	'sectionID': '126172',
	'siteName': 'Daily Mail - Mobile - UK',
	'platform': 'smartphone',
	'restrictions': '',
	'optimised': 'true'
};

integration.testParams = {
	'mobile_resolution': [375]
};

integration.channelHome = ['/home/index.html', '/news/index.html', '/ushome/index.html', '/sport/index.html', '/tvshowbiz/index.html', '/auhome/index.html', '/femail/index.html', '/health/index.html', '/sciencetech/index.html', '/money/index.html', '/video/index.html', '/travel/index.html'];

integration.flaggedTests = [];


integration.params = {
	'mf_siteId': '706980',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_FastInit': true,
	'plr_AnchorParent': ".scrollable-content",
	'plr_ScrollElement': '.scrollable-content',
	'plr_HideElementsByID': 'swipeIndicator',
	"plr_URLKeywords": 2,
	"plr_StartScrollOnAnchor": false,
	"plr_ScrollAdjustment": 0,
	"plr_SwipeoutNavOffset": 46,
	"plr_Responsive": true,
	"plr_ShowCloseButton": true,
	'plr_PageScanExclude': ' .and-footer, .footer, .page-footer, .mpu_puff_wrapper, .mol-fe-vouchercodes-link, #nav, #infinite-list, .nav-bts, .see-more, #comments '
	// "plr_PageScanExclude" : '#next-stories, #mini-carousel-wrapper, .most-read, #p-48, #p-most-read-news-mobile, #most-watched-videos-wrapper, #p-52,  #p-59,#infinite-list, #comments, #taboola-mobile-below-main-column, script, #p-25, #nav, .footer'
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
			var stylesCSS = '<style type="text/css">';
		if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
			integration.base.setCfg({
				'plr_FixedTop': true,
				'plr_EnableSwipe': true
			});
			//Due to strange behaviour, we are manually adding the viewport height to the scrollable div
			var windowHeight = $(window).outerHeight();
			stylesCSS += '.inskinLoaded .scrollable-content {padding-right : 0px;height:100% !important}';
			console.log("pagelead video test");
		} else {
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			stylesCSS += '.inskinLoaded {padding: 0 !important;}';
			stylesCSS += '.inskinLoaded .social > ul, .inskinLoaded .social .email{padding-left: 0 !important;}';
			stylesCSS += '.inskinLoaded .social .comments-count{margin-right: 0 !important;}';
			stylesCSS += '.inskinLoaded #stickyBanner{height: 0 !important;}';
			stylesCSS += '.inskinLoaded .puff li>a>span{height: auto !important;}';
			stylesCSS += '.inskinLoaded .puff .puff-div-img, .puff img{height: 100% !important;}';
			stylesCSS += '.inskinLoaded #swipeIndicator.show{right: ' + integration.custom.FrameSideRight + 'px;}';
			stylesCSS += '.inskinLoaded .menu-open #swipeIndicator.show, .inskinLoaded .menu-open a.hp-swipe{right: 0px !important;}';
			stylesCSS += '.inskinLoaded #home > a.hp-swipe{right: ' + integration.custom.FrameSideRight + 'px;}';
			stylesCSS += '.inskinLoaded .scrollable-content .sjs-share-container > .mobile-sharing-tools {height : 75px;}';
			stylesCSS += '.inskinLoaded .scrollable-content {padding-right : ' + integration.custom.FrameSideRight + 'px;}';
		}

		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		integration.custom.FrameTop = 0;
		integration.custom.heightDetection();
	}
});

integration.on('adClose', function (e) {
	$('html').removeClass('inskinLoaded');
});

integration.on('layoutChange', function (e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.heightDetection();
	setInterval(function () {
		integration.custom.heightDetection();
	}, 1000);
	$(window).resize(function () {
		integration.custom.heightDetection();
	});
});

integration.custom.heightDetection = function () {
	var totalOuterHeight = 0;

	$(".scrollable-content > *").each(function () {
		if ($(this).prop('nodeName') != 'SCRIPT') {
			totalOuterHeight += $(this).outerHeight(true);
		} //calculates the height of all elements inside scrollable content element except the scripts
	});

	if ($('body').hasClass('isHidden') == false) {
		totalOuterHeight -= $('#mobile-content > header > nav').height();
	} //adjust the height when the sticky nav bar is not hidden

	integration.base.setCfg({
		'plr_ContentH': totalOuterHeight - integration.custom.FrameTop + 40
	});

}


integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
});
/* Passback Tag */
window.ISMPassback = function () {
	if (!integration._userConsent()) {
		return '';
	}
	return "<SCRIPT SRC=\"http://ib.adnxs.com/ttj?id=5620317&cb=%%CACHEBUSTER%%&pubclickenc=%%CLICK_URL_ESC%%\" TYPE=\"text/javascript\"><\\script>";
};