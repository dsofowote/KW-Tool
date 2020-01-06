integration.meta = {
	'sectionID' : '127014',
	'siteName' : 'Apple Daily - Smartphone - (HK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707541',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};
integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var contentWidth = $(window).width() - integration.custom.FrameSideRight;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #gotop{right:' + integration.custom.FrameSideRight + 'px;}';
		stylesCSS += '.inskinLoaded .share-bar, .inskinLoaded .header, .inskinLoaded .catnav{width: ' + contentWidth + 'px !important;}';
		stylesCSS += '.inskinLoaded #video_player > iframe{width: ' + contentWidth + 'px;}';
		stylesCSS += '.inskinLoaded div[id^="google_ads_iframe"]{width: ' + contentWidth + 'px;}';
		stylesCSS += '.inskinLoaded .header{float:none; width:100%;} .inskinLoaded .navigator{float: none; width: calc(100% + 74px);} .inskinLoaded .sprite-07_head_logo_daily{margin: 8px auto auto -42px !important; background-position: 0px -521px !important;}';
		stylesCSS += '.inskinLoaded .navigator{position: relative;} .inskinLoaded .nav-slider{top: 27px; opacity: 1;} .inskinLoaded #20yearlogo > img{margin-top: 2px !important;} ';
		stylesCSS += '.inskinLoaded #topfixedAdbanner-main-content{position:relative;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		if ($(".navigator").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".navigator");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50
			});
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.laychange = function() {
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '@media screen and (min-width: 240px){.inskinLoaded .navigator ul#nav-content li{width: 60px;}}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
}

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
		var newStyles = ".inskinLoaded #gotop{margin-bottom:" + footermargin + "px !important;}";
	} else {
		var newStyles = ".inskinLoaded #gotop{margin-bottom:0px !important;}";
	}
	document.getElementById("inskinStyles").innerHTML = newStyles
}


integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
