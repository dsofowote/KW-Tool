integration.meta = {
    'sectionID' : '130131',
    'siteName' : 'Sports.fr - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104549',
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
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -45
			});
        }
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow-y: visible}';
        stylesCSS += '.inskinLoaded body {overflow: visible}';
        stylesCSS += '.inskinLoaded .instagram-media {min-width: unset !important}';
        stylesCSS += '.inskinLoaded [id^="ad-rectangle"] {margin-left: -16px !important}';
        stylesCSS += '.inskinLoaded iframe[id^="google_ads_iframe_"] {max-width: 90% !important}';
        stylesCSS += '.inskinLoaded #overall {padding-top: 44px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    if ($(".sub-nav").length > 1) {
        $(".ism-anchor").css({"top": "19px"});
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
