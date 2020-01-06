integration.meta = {
    'sectionID' : '129542',
    'siteName' : ' Supermama - Desktop - (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086022',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('.main-header').height();
        $(".home, footer").css({"max-width": "1180px", "margin": "0 auto"});
        if ($(".main-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".main-header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,

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
    if (width > 1440 || integration.custom.isSuper) {
        var sideWidth = (width - 1180)/2;
        $(".share-icon").css({
            "left" : sideWidth
        });
    } else {
        $(".share-icon").css({
            "left" : "0px"
        });
    }
}
