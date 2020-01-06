integration.meta = {
    'sectionID' : '129326',
    'siteName' : 'Momtastic - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072371',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('header').css({'z-index' :'3'});
      $('.scrollup').css({'display' :'block'});
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
    if (width > 1240 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 980)/2; /* content width divided by 2 */
        console.log(sideWidth );
        $('head').append('<style>.scrollup{right: ' + sideWidth + 'px !important; bottom: 100px !important}</style>')
    } else {
    $('head').append('<style>.scrollup{right: ' + sideWidth + 'px !important; bottom: 100px !important}</style>')
    }
};

integration.on("adServed", function(e) {
    var headerHeight = $("header").outerHeight();
    var bottomHeight = $(".bottom").outerHeight();
        $(".ism-anchor").css({"top" :headerHeight });
        integration.base.setCfg({
            plr_PageHeightAdjustment : -headerHeight,
          })
});
