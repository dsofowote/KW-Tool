integration.meta = {
    'sectionID' : '127317',
    'siteName' : 'Wunderweib - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707447',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("header").length >= 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -40
            });
        }
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded{overflow: hidden;}';
        stylesCSS += '.inskinLoaded #wrapper, .inskinLoaded .gridContainer .row .col.col-3{min-width: initial;}';
        stylesCSS += '.inskinLoaded .gridContainer {margin-top: 5px;}';
        stylesCSS += '.inskinLoaded .gridContainer .row .col.aside{width: 100%;}';
        stylesCSS += '.inskinLoaded .gridContainer .row .col.col-3{display: block;}';
        stylesCSS += '.inskinLoaded .gridContainer .row .col.col-6 .box.w-6{width: 100%; min-width: 200px;}';
        stylesCSS += '.inskinLoaded .favTopicsTeaser__link{width: 98%; height: initial; margin-left: 1%;}';
        stylesCSS += '.inskinLoaded .newsletterSubscription{width: 100%; height: initial;}';
        stylesCSS += '.inskinLoaded .bduv-multiselect{width: 100%;}';
        stylesCSS += '.inskinLoaded .bduv-formrow.newsletterSubscription__formrow input, .inskinLoaded .bduv-formrow.newsletterSubscription__formrow button, .inskinLoaded .newsletterSubscription__selection{width: 96%; margin-left: 2%; margin-right: 2%;}';
        stylesCSS += '.inskinLoaded .newsletterSubscription__submit{margin-bottom: 14px;}';
        stylesCSS += '.inskinLoaded .teaser--2col .teaser__headline{height: initial;}';
        stylesCSS += '.inskinLoaded .article-header{padding: 0;}';
        stylesCSS += '.inskinLoaded .article{width: 98%; max-width: 98%; margin-right: 1%; margin-left: 1%;}';
        stylesCSS += '.inskinLoaded .social-bar-sticky{margin-right: 1%; margin-left: 1%;}';
        stylesCSS += '.inskinLoaded .icon--sticky-social{margin-right: 2px; margin-left: 2px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        $("head").append("<style>.inskinLoaded header{margin: 0 !important;}</style>");
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.laychange();
    $(window).on('resize', function() {
        integration.custom.laychange();
    });
    $("head").append("<style>.inskinLoaded .social-bar-sticky{calc(100% - " + integration.custom.FrameSideRight + "px)}</style>");
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 500);
});

integration.custom.laychange = function() {
    var wwidth;
    var wheight = $(window).height();
    var cwidth = $(window).width() - integration.custom.FrameSideRight;
    $("head").append("<style>.inskinLoaded .social-bar-sticky{width: " + cwidth + "px;}</style>");
    if (wwidth > wheight) {
        wwidth = $(window).width();
        $("head").append("<style>.inskinLoaded nav{width:" + wwidth + "px !important;}</style>");
    } else {
        wwidth = $(window).width();
        $("head").append("<style>.inskinLoaded nav{width:" + wwidth + "px !important;}</style>");
    }
    if ($(window).width() <= 321) {
        $("head").append("<style>.inskinLoaded .list--footer-social li{margin: 2px 11px;}</style>");
    } else if ($(window).width() <= 331) {
        $("head").append("<style>.inskinLoaded .list--footer-social li{margin: 2px 20px;}</style>");
    } else if ($(window).width() <= 500) {
        $("head").append("<style>.inskinLoaded .list--footer-social li{margin: 2px 23px;}</style>");
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 500);
});
