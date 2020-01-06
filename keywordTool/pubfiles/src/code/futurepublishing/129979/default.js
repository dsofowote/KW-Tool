integration.meta = {
    'sectionID' : '129979',
    'siteName' : 'Toms Hardware - Smartphone - (Intl excl UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098950',
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
        if ($(".primary-nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".primary-nav");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -60,
                plr_PageHeightAdjustment : -60
			});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .primary-nav {width: calc(100% + 74px)}';
        stylesCSS += '.inskinLoaded .c011 {width: 80vw}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/10518929/Passback_TomsHardwareUS/Inskin\", [320, 50]).display();<\\script>";
};
