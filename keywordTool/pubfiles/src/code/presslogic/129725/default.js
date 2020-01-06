integration.meta = {
    'sectionID' : '129725',
    'siteName' : 'Girlstyle HK - (Creative Appr.) - Desktop - ( HK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1345]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086950',
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
      $('header, #footer').css({'max-width':'1085px', 'margin':'0 auto'});
      $('#header-small').css({'right':'0px', 'left':'0px'});
      $('.ad-block').css({'display':'none'});
    }
    window.unloadPageskin = function () {
        try {
          integration.destroy();
        } catch (e) {}
      };

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
        $("#back-top").css({
            "right" : sideWidth
        });
    } else {
        $("#back-top").css({
            "right" : "10px"
        });
    }
};

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({"z-index" : "1000"});
});
