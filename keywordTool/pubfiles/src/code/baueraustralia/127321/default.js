integration.meta = {
    'sectionID': '127321',
    'siteName': 'Homes To Love - Smartphone - (AU)',
    'platform': 'smartphone'
};




integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId': '706989',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        // agreement to run bottom leaderboard over PageSkin
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .site-wrapper{z-index: 10000;} .inskinLoaded header{z-index: 100000000;} .inskinLoaded #gpt-slot-0{display: none;}';
        stylesCSS += '.inskinLoaded .sticky-block{max-width: 320px;} .inskinLoaded .ad--section-bottom-leaderboard{max-width: 320px; margin-left: 15px;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on('adServed', function(e) {
    $(".ism-frame").parent().css({
        "z-index": "1300"
    });
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.laychange();
    var stylesCSS = '<style type="text/css" id="inskinStyles">';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
    integration.custom.rotateissue();
    $(window).on('resize', function() {
        integration.custom.laychange();
        integration.custom.rotateissue();
    });
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $(document).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.laychange = function() {
    var windowWidth = $(window).width();
    var contentWidth = windowWidth - integration.custom.FrameSideRight;
    $("header").css({
        "max-width": contentWidth
    });
}

integration.custom.rotateissue = function() {
    var windowWidth = $(window).width();
    if (windowWidth < 360) {
        var newvalue = '.inskinLoaded .header-logo{width: calc(100% - ' + integration.custom.FrameSideRight + 'px); margin-top: 3px; margin-left: -12px;} .inskinLoaded .header-menu{margin-left: -5px;}';
        document.getElementById('inskinStyles').innerHTML = newvalue;
    } else {
        var newvalue = '.inskinLoaded .header-logo{width: calc(100% - ' + integration.custom.FrameSideRight + 'px); margin-top: 0px; margin-left: 0px;} .inskinLoaded .header-menu{margin-left: 0;}';
        document.getElementById('inskinStyles').innerHTML = newvalue;
    }
}

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if (height < integration.custom.PageSkinTopPanel) {
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("header").css({
            "margin-top": newheight
        });
    } else {
        $("header").css({
            "margin-top": "0px"
        });
    }
}
integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += 'header{max-width: 100% !important; margin-top: 0!important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">googletag.pubads().definePassback(\"/13534306/homestolove\",[320,50]).display();<\\script>";
};