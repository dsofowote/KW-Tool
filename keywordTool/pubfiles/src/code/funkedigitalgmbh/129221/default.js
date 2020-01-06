integration.meta = {
    'sectionID' : '129221',
    'siteName' : 'WAZ - Smartphone - (DE)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1065339',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOevd0nOevd0nAKABBENBxoAAAAiCAJgAUABYAFQALgAZABAADIAIgATgCEA'
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var leftPanel = e.data.plr_FrameSideRight;
        var windowWidth = $(window).width();
	      var contentWidth = windowWidth - leftPanel;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #scrolltBtn{ right: ' + leftPanel + 'px;}';
        stylesCSS += '.inskinLoaded .article .hero-img, .inskinLoaded .inline-media, .inskinLoaded #vi-stories-main-container, .inskinLoaded div[id^=aniBox_]{ width: ' + contentWidth + 'px !important;}';
        stylesCSS += '.inskinLoaded .cleverpush-bell{ z-index: 4;}';
        stylesCSS += '.inskinLoaded #paywall-container{margin-left: -15px;}';
        stylesCSS += '@media only screen and (max-width: 390px) {.inskinLoaded .ad.ad--stroer.ad--marker #pos2_nationalnews{margin-left: -15px !important;}}';
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
