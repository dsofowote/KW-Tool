integration.meta = {
    'sectionID' : '129301',
    'siteName' : 'WheninManila - Desktop - ( PH )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1550]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1071767',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1290,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#menu-cat-navigation, #subfooter, #footer, #header2").css({"max-width": "1290px", "margin": "0 auto"});
      $("#nav").css({"background": "#fff"});
      $("#breakingcontainer").css({"max-width": "1290px", "padding-left": "0"});
    }
});

integration.on("adServed", function(e) {
      var width = $(window).width();
      var sideWidth = (width - 1290)/2;
	    $(".ism-anchor").css({"z-index" : "9999"});
      $("#endpage-box").css({"right" : sideWidth + 5, "bottom": "105px"});
      integration.custom.floatingButtons();
      $(window).resize(function() {
      integration.custom.floatingButtons();
});
});


integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1550 || integration.custom.isSuper) {
        var sideWidth = (width - 1290)/2;
        $("#endpage-box").css({
            "right" : sideWidth + 5
        });
    }
}
