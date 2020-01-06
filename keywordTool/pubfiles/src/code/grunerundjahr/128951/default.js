integration.meta = {
    'sectionID' : '128951',
    'siteName' : 'Neon - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043089',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1120,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    $('.sticky-vergleich').css({'max-width': '960px', 'margin': '0 auto', 'left': 'auto'});
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    var tabWidth = (width - 1120)/2;
    if (width < 1454 || integration.custom.isSuper) {
        var tabWidth = (width - 1120)/2;
        $(".m-goto-home-toolbar").css({
            "left" : tabWidth + 10,
            "top": '78%'
        });
    } else {
        $(".m-goto-home-toolbar").css({
            "left" : "0px",
            "top": '50%'
        })
    };

    if (width < 1940 || integration.custom.isSuper) {

            $(".m-sharing-toolbar-vertical").css({
                "left" : tabWidth + 90
            });
        } else {
            $(".m-sharing-toolbar-vertical").css({
                "left" : tabWidth + 90
            })
        }
}
