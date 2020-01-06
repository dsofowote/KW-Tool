integration.meta = {
    'sectionID' : '129433',
    'siteName' : 'The Rakyat Post  - Desktop - (MY)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077882',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".jeg_viewport").css({"margin": "0 auto", "max-width": "1200px"});
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
    if (width < 1580 || integration.custom.isSuper) {
        var sideWidth = (width - 1200)/2;
        $("#at4-share").css({"left" : sideWidth + 10});
    } else {
      $("#at4-share").css({"left" : "0px"});
    }
}
