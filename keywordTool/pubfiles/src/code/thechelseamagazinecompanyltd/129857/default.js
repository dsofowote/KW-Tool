integration.meta = {
    'sectionID' : '129857',
    'siteName' : 'Wedding Ideas  - Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1093671',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var navHeight = $('.td-header-menu-wrap').height();
        $('#4db9dc91-6fb5-4d95-ab71-fdedf0fe4ef5').css({'max-width':'1170px', 'margin':'0 auto'});
        integration.base.setCfg({
            plr_ScrollAdjustment : navHeight
        });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1430 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1170)/2; /* content width divided by 2 */
        var sideWidth1 = (width - 1170)/2 +42;
        $(".td-scroll-up").css({
            "right" : sideWidth
        });
        $('body').append('<style>.pb-stream-sticky-on{right:'+ sideWidth1+ 'px !important}</style>');

    } else {
        $(".td-scroll-up").css({
            "right" : "15px"
        });
        $('body').append('<style>.pb-stream-sticky-on{right:55px !important}</style>');
    }
}

integration.on("adServed", function(e) {
      $(".ism-frame:nth-of-type(3)").css({"z-index" : "10000"});

});
