integration.meta = {
    'sectionID': '127015',
    'siteName': 'The Roar - (Creative Approval) - Smartphone - (AU)',
    'platform': 'smartphone'
};


integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId': '707627',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_StartScrollOnAnchor': true,
    'plr_ScrollAdjustment': 53,
    "plr_FastInit": true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".po-nav-top__holder").outerHeight() + $(".pm-nav-mobile-categories__holder").outerHeight();
        var windowWidth = $(window).width();
        if ($(".pm-nav-mobile-categories__holder").length == 1){
            $("<div id='inskinanchor'></div>").insertAfter(".pm-nav-mobile-categories__holder");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight,
                plr_ScrollAdjustment: headHeight
            });
        }
        if ($(".po-nav-sub").length == 1){
            $("<div id='inskinanchor'></div>").insertAfter(".po-nav-top");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight,
                plr_ScrollAdjustment: headHeight
            });
        }

        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .po-nav-top{z-index: 9999 !important;}';
        stylesCSS += '.inskinLoaded #po_ad_newroar-mobile-header_0 {display: none !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/34677533/Roar-ROS-ATF-Middle-Mobile-300x50', [[300,\n50], [320, 50]]).setTargeting('passback', 'true').display().set(\"page_url\", \"theroar.com.au\");\n<\\script>";
};
