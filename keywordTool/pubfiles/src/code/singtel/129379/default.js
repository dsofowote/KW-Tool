integration.meta = {
    'sectionID' : '129379',
    'siteName' : 'HungryGoWhere - (Publisher Booking) - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074833',
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
        var wwidth = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = wwidth - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .module-ads.mobile-ads.gallery-ads {margin-left:-15px;}';
        stylesCSS += '.inskinLoaded .header-wrapper .nav-expanded {z-index:10;}';
        stylesCSS += '.inskinLoaded .full-box {box-shadow: none; -webkit-box-shadow: none;}';
        stylesCSS += '.inskinLoaded #header .container-header, .inskinLoaded .list-socialmedia, .inskinLoaded .module-ads.mobile-ads.gallery-ads{max-width: ' + contentWidth + 'px;}';
        stylesCSS += '.inskinLoaded .module-ads.mobile-ads.gallery-ads.bnr-fixed {margin-left:0px !important;}';
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
