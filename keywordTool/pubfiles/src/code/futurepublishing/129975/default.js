integration.meta = {
    'sectionID' : '129975',
    'siteName' : 'Toms Guide - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1098946',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var topHeight = $('.page.header-container').height() + $('.gift-ribbon').height();
		var headerHeight = $('.header-g').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($(".page.header-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".page.header-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_StartScrollOnAnchor: true,
				plr_ScrollAdjustment: headerHeight + 5,
				plr_PageHeightAdjustment: -topHeight
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .header-content .header-nav{top: ' + topHeight + 'px !important;}';
		stylesCSS += '.inskinLoaded .share-bar .share-bar-item{padding-right: 6px !important;}';
		stylesCSS += '.inskinLoaded .gift-ribbon, .inskinLoaded .page.header-container{width: calc(100% + ' + integration.custom.FrameSideRight + 'px) !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TomsGuide/Inskin\", [320, 50]).display();<\\script>";
};
