integration.meta = {
    'sectionID' : '129293',
    'siteName' : 'True ID  - Desktop - ( TH )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070904',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1144,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $('.trueid-main-nav').outerHeight() + $('.wrap-noti-bar').height();
      var scrollHeight = $('.wrap-noti-bar').height();
      $('.footer-section, .epl-shelf-lv-a, .content-row, #Exclusive-banner, .sub-navigation, .section-title, .section-related').css({'max-width': '1144px', 'margin':'0 auto'});
      $(".nav-scroller").css({"top":"4px"});
      if ($(".trueid-main-nav").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".trueid-main-nav");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment: -scrollHeight
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
    if (width > 1400 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1144)/2; /* content width divided by 2 */
        $(".cd-top").css({
            "right" : sideWidth,
            "bottom" :"100px"
        });
    } else {
        $(".cd-top").css({
            "right" : sideWidth,
            "bottom" :"100px"
        });
    }
}
