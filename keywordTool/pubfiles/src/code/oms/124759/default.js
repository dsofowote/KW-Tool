integration.meta = {
    "sectionID": "124759",
    "siteName": "Freie Presse",
    "publisher": "oms",
    "platform": "desktop"
};

integration.testParams = {};

integration.params = {
    'mf_siteId': '706356',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var headerHeight = $('#header-main').height();
        $('html').css({
            'overflow-x': 'visible'
        });
        $('#baseContainer').css({
            'padding-top': '20px'
        });
        if ($("main").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("main");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -headerHeight
            });
        };

    }
});

integration.on("layoutChange", function (e) {
    integration.custom.floatingButtons();
    $(window).resize(function () {
        integration.custom.floatingButtons();
    });
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $(document).scroll(function () {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.floatingButtons = function () {
    var width = $(window).width();
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1020) / 2 - 40;
        $("#linkIntranet").css({
            "left": sideWidth + "px",
            "top": "380px"
        });
    } else {
        $("#linkIntranet").css({
            "left": sideWidth + "px",
            "top": "380px"
        });
    }
};

integration.on("adServed", function (e) {
    var headHeight = $('#header-wrapper').outerHeight() //+ $('#header-main').height();
    // $('body').css('padding-left', '0px');
    $('#advertisingTopWrapper').hide();
    $("#inskinanchor").css({
        "margin-top": headHeight
    });
});