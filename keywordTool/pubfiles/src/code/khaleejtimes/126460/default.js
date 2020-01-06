integration.meta = {
	'sectionID' : '126460',
	'siteName' : 'Khaleej Times - (MENA Sold Campaigns) - Smartphone - (MENA)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707018',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 70,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".logoarea").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".logoarea");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -70
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	var width = $(window).width();
	var headerHeight = $(".logoarea").height();
	$(".ism-frame").parent().css({
		"margin-top" : headerHeight + 20
	});
	$('body').addClass('inskinLoaded');
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded{margin-top: ' + integration.custom.FrameTop + 'px;} .inskinLoaded .menu_nw_pich, .inskinLoaded .menu_nw_search_container, .inskinLoaded .menu_social{margin-left: 0; margin-right: 0; padding-left: 0; padding-right: 0; max-width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}';
	stylesCSS += '.inskinLoaded .container{padding-top: 0;} .inskinLoaded .container > div{float: none;} .inskinLoaded .logoarea{overflow: hidden; top: 0;} .inskinLoaded #menu{margin-top: 47px;}';
	stylesCSS += '.inskinLoaded div.vuukle-powerbar-vertical.vuukle-powerbar-processed {right: ' + (integration.custom.FrameSideRight + 5) + 'px !important;} .inskinLoaded .images_txtbg{padding: 0;} .inskinLoaded .weather_container{padding: 3% 2% 8% 2%;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	integration.custom.laydetect();
	$(window).on('resize', function() {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var frame = integration.custom.FrameSideRight + 20;
		var width = $(window).width();
		integration.custom.laydetect();
	});
});

integration.custom.laydetect = function() {
	var width = $(window).width();
	var socbtn = $('.menu_social').height();
	var dheight = $('.menu_nw_pich').height();
	$('#showmenu').click(function() {
		if ($('#menu').hasClass('left show')) {
			if (width > 470) {
				integration.base.setCfg({
					'plr_PageHeightAdjustment' : dheight + socbtn + 50
				});
			} else if (width < 470) {
				integration.base.setCfg({
					'plr_PageHeightAdjustment' : dheight + socbtn + 60
				});
			}
		} else if ($('#menu').hasClass('left')) {
			integration.base.setCfg({
				'plr_PageHeightAdjustment' : -70
			});
		}
	});
};

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1251894/Inskin-Dummy-300x250', [300, 250]).display();\n<\\script>";
};
