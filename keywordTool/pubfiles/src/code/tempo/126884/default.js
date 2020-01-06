integration.meta = {
    'sectionID' : '126884',
    'siteName' : 'Tempo - Desktop - (ID)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    mf_siteId: "708149",
    plr_PageAlignment: "center",
    plr_ContentW: 1170,
    plr_ContentType: "PAGESKINEXPRESS",
    plr_UseFullVersion: true,
    plr_UseCreativeSettings: true,
    plr_HideElementsByID: "",
    plr_HideElementsByClass: ""
};
integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.header-bottom').height();
        var width = $(window).width();
        var sideWidth = (width - 1170) / 2;
        $("head").append('<style type="text/css"> .block-outmenu {width:1170px !important; margin: 0 auto;}</style>');
        $("body > div.full-body > div.pages > div.block-outmenu.stand-menu, body > footer, body > div.foot-about, .header-top, .header-main").css({
            "max-width": "1170px",
            width: "1170px",
            margin: "0 auto"
        });
        integration.base.setCfg({
            plr_ScrollAdjustment : headHeight
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
    if (width > 1430) {
        var sideWidth = (width - 1170) / 2;
        $('head').append('<style>#videoPlaylistPlugId{right:' +  sideWidth +'px !important}</style>');
        $(".scroll-top").css({
            "right" : sideWidth
        });

    } else {
        $('head').append('<style>#videoPlaylistPlugId{right:10px !important}</style>');
        $(".scroll-top").css({
            "right" : 20
        });
    }
};
