integration.meta = {
	'sectionID' : '126387',
	'siteName' : 'Talksport - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706886',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_StartScrollOnAnchor' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	'plr_ScrollAdjustment' : 43
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($("#main-content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#main-content > div:first-child");
			if ($("div.sub-nav__mobile-head").length == 1) {
				integration.base.setCfg({
					'plr_AnchorParent' : '#inskinanchor',
					'plr_PageHeightAdjustment' : -135
				});
			} else {
				integration.base.setCfg({
					'plr_AnchorParent' : '#inskinanchor',
					'plr_PageHeightAdjustment' : -90
				});
			}
		}
		var headerHeight = $('.sun-header--wrap').height() + $('.swiper-wrapper').height() + $('.sub-nav__mobile-head').height();
		$('#inskinanchor').css({
			"position" : "relative",
			"margin-top" : headerHeight
		});
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #header-ad > div.billboard{display:none;}';
		stylesCSS += '.inskinLoaded{overflow: visible !important;}';
		stylesCSS += '.inskinLoaded .main-content-wrap{padding-top: 0 !important;}';
		stylesCSS += '.inskinLoaded .main-content-wrap{padding-top: 0 !important;}';
		stylesCSS += '.inskinLoaded .sub-nav__mobile-head{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/3048/d.talksport/passback', [[320, 50]]).display();\n<\\script>";
};
