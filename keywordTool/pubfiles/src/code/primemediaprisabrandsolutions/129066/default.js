integration.meta = {
    'sectionID': '129066',
    'siteName': ' Huffington Post - Desktop - (ES)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1047225',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body, #hp_cconsent, #desktop__main_header, .nav-sticky, #desktop__main_footer, .video-entry__container').css({ 'max-width': '1170px', 'margin': '0 auto' });
        $('body').css({ 'background-color': '#ffffff' })
        $('body').append('<style>.nav-sticky{left: auto !important}</style>');
        $('body').append('<style>.page-wrapper{left: 0 !important}</style>');
        $('body').append('<style>.stickyNav{max-width:1170px !important ; margin: 0 auto}</style>');
        $('body').append('<style>.page-wrapper:after{z-index: 9999 !important;}</style>');
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1170) / 2;
        $(".newsletter-toaster__inner-container").css({ "left": sideWidth + "px" });
    } else {
        $(".ins-share-container").css({ "left": sideWidth + "px" });
    }
}

integration.custom.InSkinBottomNav = function() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    var headHeight = $('#desktop__main_header').height();
    if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel) - docheight - headHeight;
        $(".newsletter-toaster__inner-container").css({
            "margin-bottom": footermargin + "px"
        });
    } else {
        $(".newsletter-toaster__inner-container").css({
            "margin-bottom": "0"
        });
    }
}