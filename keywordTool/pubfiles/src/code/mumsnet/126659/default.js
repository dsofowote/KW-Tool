integration.meta = {
    'sectionID' : '126659',
    'siteName' : 'Mumsnet - Smartphone - (AU IE UK US)',
    'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '707176',
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
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 250);
        var wwidth = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        var contentWidth = wwidth - integration.custom.FrameSideRight;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .bcup .ad-fixed-banner-sm .ad-leaderboard{width: ' + contentWidth + 'px; margin: 0;}';
        stylesCSS += '.inskinLoaded .cbola-box{width: ' + contentWidth + 'px !important;}';
        stylesCSS += '.inskinLoaded .mm-panels{width: calc(' + contentWidth + 'px - 60px) !important;}';
        stylesCSS += '.inskinLoaded .bcup .mm-panels{margin-top: calc(' + integration.custom.PageSkinTopPanel + 'px - 40px);}';
        stylesCSS += '.inskinLoaded .shared-hero-carousel .carousel__text{height: 172px;}';
        stylesCSS += '.inskinLoaded #mm-blocker{z-index: 11; left: -59px;}';
        stylesCSS += '.inskinLoaded .header__advertising{height: 0 !important;}';
        stylesCSS += '.inskinLoaded .header-menu-active{top: 40px !important;}';
        stylesCSS += '.inskinLoaded .header__interactions{margin-top: 11px;}';
        stylesCSS += '.inskinLoaded .interactions-container{z-index:100;}';
        stylesCSS += '.inskinLoaded body > div.mobile-container > div.mob-ad{display: none;}';
        stylesCSS += '.inskinLoaded .leaderboard, #mobile_mpu_slot{display: none;}';
        stylesCSS += '.inskinLoaded #mobile_recommend_links ul li{margin:0 1px;}';
        stylesCSS += '.inskinLoaded #mobile_recommend_links{padding: 10px;}';
        stylesCSS += '.inskinLoaded .navbar-top.navbar{margin:0;}';
        stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .mobile-container__header .logo a:last-of-type img{width: 220px; height: auto;}}';
        stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .navbar-top.navbar .navbar-header{padding: 0 5px;}}';
        stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .navbar-top.navbar .navbar-header .navbar-toggle{margin-left: 4px;}}';
        stylesCSS += '@media only screen and (max-width: 360px) {.inskinLoaded span.icon-search, span.icon-profile, span.icon-menu{height: 30px; width: 30px; margin-left: 0px;}}';
        stylesCSS += '@media only screen and (max-width: 360px) {.inskinLoaded #Root > header.header.static > div > a, #Root > header.header.static > div > a > img{width: 110px;}}';
        stylesCSS += '@media only screen and (max-width: 360px) {.inskinLoaded .interactions-container{width: auto;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10"
    });
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});
