integration.meta = {
    'sectionID' : '130106',
    'siteName' : 'Mail Online - Desktop - Direct - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1224]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1103740',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body, html').css({'overflow-x':'visible'});
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
    if (width > 1224 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 964)/2; /* content width divided by 2 */
        $(".jwplayer_body_1").css({
            "right" : sideWidth
        });
    } else {
        $(".jwplayer_body_1").css({
            "right" : "10px"
        });
    }
}
