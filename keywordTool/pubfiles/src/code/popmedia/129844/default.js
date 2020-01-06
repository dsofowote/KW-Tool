integration.meta = {
    'sectionID' : '129844',
    'siteName' : 'BusinessFocus   - (Creative Appr.) - Desktop - ( HK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1345]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089690',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1085,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#header, #header-small, #footer').css({'max-width': '1085px', 'margin':'0 auto'});
      $('#header-small').css({'left': '0', 'right':'0'});
      window.unloadPageskin = function () {
        try {
          integration.destroy();
        } catch (e) {}
      };
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
    if (width > 1345 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1085)/2; /* content width divided by 2 */
        $(".back-top").css({
            "right" : sideWidth,
            "bottom" :'100px'
        });
    } else {
        $(".back-top").css({
            "right" : sideWidth,
            "bottom" :'100px'
        });
    }
}

