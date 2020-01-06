integration.meta = {
    'sectionID': '129243',
    'siteName': ' Preloved - Desktop - (UK)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1430]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1068214',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $('#mainContainer, .slider-frame, #marketplace-header, .page-footer__content ').css({
            'max-width': '1170px',
            'margin': '0 auto'
        });
        $('.fixed-social-bar-component ').css({
            'z-index': '3'
        });

        $(".main-content.content-container, .page-banner").css({
            "max-width": "1160px",
            'margin': "0 auto"
        });
        $(".page-container").css({
            overflow: "visible"
        });
        var headerHeight = $("#page-header").outerHeight();
        if ($("#page-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#page-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headerHeight,
                plr_ScrollAdjustment: -headerHeight,
            })
        }
    }
});

integration.on("layoutChange", function (e) {
    integration.custom.floatingButtons();
    $(window).resize(function () {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function () {
    var width = $(window).width();
    if (width > 1540 || integration.custom.isSuper) {
        /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1170) / 2; /* content width divided by 2 */
        $('head').append('<style>.scroll-to-top-component {right:' + sideWidth + 'px !important; bottom: 100px }</style>');
    } else {

        $('head').append('<style>.scroll-to-top-component {right:' + sideWidth + 'px !important; bottom: 100px}</style>');
    }
}