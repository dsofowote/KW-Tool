integration.meta = {
	'sectionID' : '126531',
	'siteName' : 'Mail Online (CREATIVE APPROVAL) - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707023',
	'plr_FluidAnchor' : true,
	'plr_Fluid': true,
  'plr_Responsive' : true,
  'plr_ShowCloseButton' : true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
	'plr_FastInit' : true,
	'plr_AnchorParent' : ".scrollable-content",
	'plr_ScrollElement' : '.scrollable-content',
	'plr_HideElementsByID' : 'swipeIndicator',
	'plr_PageScanExclude' : '#nav, .footer',
	"plr_StartScrollOnAnchor" : false,
	"plr_ScrollAdjustment" : 0,
	"plr_SwipeoutNavOffset" : 46,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_PageScanExclude' : ' .and-footer, .footer, .page-footer, .mpu_puff_wrapper, .mol-fe-vouchercodes-link, #nav, #infinite-list, .nav-bts, .see-more, #comments '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {padding: 0 !important;}';
		stylesCSS += '.inskinLoaded .social > ul, .inskinLoaded .social .email{padding-left: 0 !important;}';
		stylesCSS += '.inskinLoaded .social .comments-count{margin-right: 0 !important;}';
		stylesCSS += '.inskinLoaded #stickyBanner{height: 0 !important;}';
		stylesCSS += '.inskinLoaded .puff li>a>span{height: auto !important;}';
		stylesCSS += '.inskinLoaded .puff .puff-div-img, .puff img{height: 100% !important;}';
		stylesCSS += '.inskinLoaded .menu-open #swipeIndicator.show, .inskinLoaded .menu-open a.hp-swipe{right: 0px !important;}';
		stylesCSS += '.inskinLoaded #home > a.hp-swipe, .inskinLoaded .hp-swipe[data-hp-action=swipeleft]{right: ' + integration.custom.FrameSideRight + 'px;}';
		stylesCSS += '.inskinLoaded #swipeIndicator.show{right: ' + integration.custom.FrameSideRight + 'px !important;}';
		stylesCSS += '.inskinLoaded .scrollable-content .sjs-share-container > .mobile-sharing-tools {height : 75px;}';
		if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
			integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
			stylesCSS += '.inskinLoaded .scrollable-content {padding-right : 0px;}';
		} else {
			stylesCSS += '.inskinLoaded .scrollable-content {padding-right : ' + integration.custom.FrameSideRight + 'px;}';
		}
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

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- BEGIN JS TAG - Daily Mail ROS < - DO NOT MODIFY -->\n\n<script class=\"xyz-wrapper-tag\">var a=\"https://ads.playground.xyz/host-config/appnexus?relayUrl=https%3A%2F%2Fsecure.adnxs.com%2Fttj%3Fid%3D10073402&size=320x50\",b={};try{b.ref=window.top.location.href,a=a+\"&ref=\"+encodeURIComponent(b.ref)}catch(a){console.log(\"PLAYGROUND-XYZ: cross-domain iframe prevented host detection\")}document.write(\"<script src=\"+a+\"></scr\"+\"ipt>\");<\\script>\n\n<!-- END TAG -->";
};
