integration.meta = {
	'sectionID' : '127698',
	'siteName' : 'Hiamag - Smartphone- (MENA) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '831107',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#menu-panel').css({
			"z-index" : "10"
		});
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTopSide = e.data.plr_FrameTop;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .side-nav{top: ' + integration.custom.FrameTopSide + 'px;} .inskinLoaded .menu{right: ' + integration.custom.FrameSideRight + 'px !important;}';
	stylesCSS += '.inskinLoaded nav.side-nav .menu{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += '.inskinLoaded ul.pager-load-more li.pager-next a{width: 100% !important;} .inskinLoaded #hia_comment .comment_title{padding: 0; width: 100% !important;}';
	stylesCSS += '.inskinLoaded .slider-album.media-slider .slick-prev{right: 20px !important;} .inskinLoaded .slider-album.media-slider .slick-next{right: -30px !important;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	$(window).scroll(function() {
		if ($('.navigation-wrapper').hasClass('is_stuck') && $('body').hasClass('inskinLoaded')) {
			$('.navigation-wrapper').next().css({
				"width" : "100%"
			});
		} else {
			$('.navigation-wrapper').next().css({
				"width" : "initial"
			});
		}
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('.slick-next').trigger("click");
});
