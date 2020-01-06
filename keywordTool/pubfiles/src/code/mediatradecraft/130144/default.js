integration.meta = {
    'sectionID' : '130144',
    'siteName' : 'Just Jared JR - (ARTICLE PAGES) - Desktop - (INT) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom': 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('head').append('<style>body{display:initial !important}</style>');

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
    if (width > 1220 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 960)/2; /* content width divided by 2 */
        $(".cnx-highlights-container").css({
            "right" : sideWidth
        });
    } else {
        $(".cnx-highlights-container").css({
            "right" : "10px"
        });
    }
};

