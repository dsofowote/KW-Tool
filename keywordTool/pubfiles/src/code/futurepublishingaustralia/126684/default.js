integration.meta = {
   'sectionID' : '126684',
   'siteName' : 'Techradar - Smartphone - ( AU ASIA )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
   'mf_siteId' : '708017',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .locale__flags{right: 50px !important;}';
        stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded [class^="slot-single-height-"]{margin-left: -20px !important;}}';
        if ($(".review-article ").length > 0) {
            stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded [class^="slot-mpu"]{margin-left: -20px !important;}}';
        }
        stylesCSS += '.inskinLoaded .wrapper{position: relative;} .inskinLoaded .primary-nav .menuitems{top: 0;} .inskinLoaded .primary-nav{position: relative;}';
        stylesCSS += '@media screen and (max-width: 321px) {.inskinLoaded .site-logo svg{width: 175px !important;} .inskinLoaded .button-menu{width: 41px;} .inskinLoaded .button-search{min-width: 50px;}}';
        stylesCSS += '@media screen and (max-width: 321px) {.inskinLoaded .pagination.internal.current-prev-next.sticky-next-prev .direction{font-size: 0.65em !important;} .inskinLoaded .masthead-item.user-locale{right: 19px;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .next-prev-container{width: calc(100% - ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '.inskinLoaded .contrast {width: calc(100% - ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '.inskinLoaded .pagination.internal.current-prev-next.sticky-next-prev{width: calc(100% + ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_TechRadar/Inskin\", [320, 50]).display();\n<\\script>\n";
};
