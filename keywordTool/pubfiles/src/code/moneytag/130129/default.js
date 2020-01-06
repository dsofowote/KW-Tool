integration.meta = {
    'sectionID' : '130129',
    'siteName' : 'Sports.fr - Desktop - (FR)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1258]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104547',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 998,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#nav");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -130,
                plr_PageHeightAdjustment : -130
			});
        }
        $("#nav").css({"z-index": "6"});
        $(".footer").css({"margin": "0 auto", "max-width": "998px"});
    }
});

integration.on("layoutChange", function(e) {
    var width = $(window).width();
    var sideWidth = (width - 978)/2;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom
    $("#sticker-video-popin").css({
        "left" : sideWidth,
        "bottom" : integration.custom.PageSkinBottomPanel
    });
    $(window).resize(function() {
        width = $(window).width();
        sideWidth = (width - 998)/2;
        $("#sticker-video-popin").css({"left" : sideWidth});
    });
});