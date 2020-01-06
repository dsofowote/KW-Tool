integration.meta = {
	'sectionID' : '127107',
	'siteName' : 'Daily Mail - Smartphone - ASIA',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708143',
	'plr_FluidAnchor' : true,
	/*'plr_Fluid' : true,*/
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_AnchorParent' : ".scrollable-content",
	'plr_ScrollElement' : '.scrollable-content',
	'plr_HideElementsByID' : 'swipeIndicator',
	'plr_PageScanExclude' : '#nav, .footer',
	"plr_StartScrollOnAnchor" : false,
	"plr_ScrollAdjustment" : 0,
	"plr_SwipeoutNavOffset" : 46,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {padding: 0 !important;}';
		stylesCSS += '#mpu_mobile_upper_middle{display: none !important;}';
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
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		integration.custom.FrameTop = 0;
		integration.custom.heightDetection();
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.heightDetection();
	setInterval(function() {
		integration.custom.heightDetection();
	}, 1000);
	$(window).resize(function() {
		integration.custom.heightDetection();
	});

});

integration.custom.heightDetection = function() {
	var totalOuterHeight = 0;

	$(".scrollable-content > *").each(function() {
		if ($(this).prop('nodeName') != 'SCRIPT') {
			totalOuterHeight += $(this).outerHeight(true);
		} //calculates the height of all elements inside scrollable content element except the scripts
	});

	if ($('body').hasClass('isHidden') == false) {
		totalOuterHeight -= $('#mobile-content > header > nav').height();
	}//adjust the height when the sticky nav bar is not hidden

	integration.base.setCfg({
		'plr_ContentH' : totalOuterHeight - integration.custom.FrameTop + 40
	});

}

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/5765/dailymail.uk\" height=\"250\" width=\"300\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
