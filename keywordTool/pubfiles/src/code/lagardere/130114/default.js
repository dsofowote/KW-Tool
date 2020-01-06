integration.meta = {
    'sectionID' : '130114',
    'siteName' : 'Virgin Radio FR - Desktop - (FR)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104194',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('#top').outerHeight();
        $('#mainFooter, .articleBottom').css({'max-width':'1020px','margin':'0 auto'});
        $('.virginradio.fr-home-atf_centre').css({'display':'none'});
        $('.grid').css({'margin':'5px'});
        $('.left').css({'width':'706px'});
        $('.right').css({'width':'280px'});
        if ($("#top").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#top");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment: -headHeight
            });
    }
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
    if (width > 1250 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1000)/2; /* content width divided by 2 */
        $("#stickySocial").css({
            "left" : sideWidth
        });
    } else {
        $("#stickySocial").css({
            "right" : "10px"
        });
    }
}
