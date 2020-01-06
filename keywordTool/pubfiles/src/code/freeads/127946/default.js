integration.meta = {
	'sectionID' : '127946',
	'siteName' : 'Free Ads - Smartphone - (UK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '953711',
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
		var headerHeight = $('section.head_top"').height();
		if ($("section.head_top").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("section.head_top");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight,
				'plr_StartScrollOnAnchor' : true
			});
		}
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .bottom_sticky_box{display:none !important;}';
		stylesCSS += '.inskinLoaded section.head_top{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '.inskinLoaded .link, .inskinLoaded .link.long{width: 78px !important;}';
		stylesCSS += '.inskinLoaded #socials ul li{margin-right: 20px;}';
		stylesCSS += '@media only screen and (min-width: 375px) {.inskinLoaded .fa_listing .control_bar .filter_btn .styled-select{width: 80px !important;}}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .fa_gallery .view_all{right: 0 !important;} .inskinLoaded .fa_gallery span.trusted_member img{width: 120px !important;}}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .fa_listing .control_bar{width: 300px !important; margin-left: -10px !important;}}';
		stylesCSS += '.inskinLoaded .fa_700, .inskinLoaded .fa_300, .inskinLoaded .fa_mpu_box, .inskinLoaded .ctx_afs_main, .inskinLoaded .becovi_m{display: none !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('.next-arrow').trigger("click");
});

integration.on('layoutChange', function(e) {
	var fixedBar = $('.adpage-sticky-header').outerHeight();
	$(document).scroll(function() {
		if ($(".adpage-sticky-header").length == 1) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : fixedBar
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\ngoogletag.pubads().definePassback('/306025875/Passback_Mobile_ROS_BTF_300x250', [300, 250]).display();\n<\\script>";
}; 