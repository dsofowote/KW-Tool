integration.meta = {
    'sectionID' : '129842',
    'siteName' : 'Tagcircle - Desktop - (HK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089668',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom': 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#header, #content-container, #footer, .nav-background').css({'max-width':'1200px','margin':'0 auto'});
        $('.nav-background').css({'left':'unset'});
        $('#header').css({'left':'0px', 'right':'0px'});
        $('body').css({'overflow-x':'unset'});
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
    if (width > 1460 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1200)/2; /* content width divided by 2 */
        $("#totop").css({
            "right" : sideWidth +20
        });
    } else {
        $("#totop").css({
            "right" : "10px"
        });
    }
}

integration.on("adServed", function(e) {
      $(".ism-anchor").css({"z-index" : "10"});

});
