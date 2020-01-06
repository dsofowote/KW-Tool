integration.meta = {
    'sectionID': '127697',
    'siteName': 'Hiamag - Desktop - (MENA) ',
    'platform': 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '831106',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        /* Fix for side navigation */
        $("#sticky-header .menu-icon").click(function() {
            $(".ism-frame").parent().children().toggleClass("ismClicked");
        });
        /*touchstart for touch devices*/
        $("#mm-blocker, .mm-close").bind("click touchstart", function() {
            $(".ism-frame").parent().children().removeClass("ismClicked");
        });
        /* End of fix for side navigation */
        /* Style to shift PageSkin to the right, can be changed depending on desired effect*/
        $('head').append("<style>.nav.sticky {position: absolute !important;top: auto;}.ismClicked {transform: translate(-435px, 0px);transition: transform 0.8s ease 0s;-webkit-transform: translate(-435px, 0px);-webkit-transition: transform 0.8s ease 0s;}</style>");
    }
});

/** Move to-top-of-page button inside PageSkin when overlaps **/
integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1450 || integration.custom.isSuperWide) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 990) / 2; /* content width divided by 2 */
        $("#return-to-top").css({
            "right": sideWidth + 20
        });
        $(".foxpush_blocked_box_left").css({
            "left": sideWidth
        });

    } else {
        $("#return-to-top").css({
            "right": "20px"
        });
        $(".foxpush_blocked_box_left").css({
            "left": "0"
        });
    }
}