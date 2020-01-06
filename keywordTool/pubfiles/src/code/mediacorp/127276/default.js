integration.meta = {
    'sectionID': '127276',
    'siteName': '8Days - Smartphone - (Asia)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '721751',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    "plr_StartScrollOnAnchor": true,
    "plr_ScrollAdjustment": 58
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .main-header{width: calc(100% + 74px);} .inskinLoaded .flexslider .flex-direction-nav .flex-next{right: 0 !important;} .inskinLoaded .flexslider .flex-direction-nav .flex-prev{left : 0!important}';
        stylesCSS += '@media only screen and (max-width: 1100px){.inskinLoaded .section__content{padding: 0!important;}} .inskinLoaded .flexslider-celebrities{padding-left: 45px;}';
        stylesCSS += '</style>';
        
        $('head').append(stylesCSS);
        if ($("section.main-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("section.main-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -95
            });
        }
    }
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var cwidth = $(window).width() - integration.custom.FrameSideRight;
	
	$("head").append("<style>.inskinLoaded .article__content iframe{max-width: " + (cwidth - 30) + "px;}</style>");
	$("head").append("<style>.inskinLoaded div[id^='div-gpt-ad-mobile']{max-width: " + cwidth + "px; margin-left: -15px !important;}</style>");
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('#inskinanchor').remove();
});