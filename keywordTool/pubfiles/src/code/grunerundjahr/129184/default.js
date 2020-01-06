integration.meta = {
    'sectionID' : '129184',
    'siteName' : 'Ok Magazin  - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1062051',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#wrapper, #page, .header, #navigation, #navigation:after").css({"max-width": "1320px"});
      $(".region-adsky, #aboveHeaderBanner").css({"display": "none"});
      window.unloadPageskin = function() {
        try {
          integration.destroy();
        } catch(e) {
        };
      }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.socialButtonsRight();
    integration.custom.socialButtonsTop();
    $(window).resize(function() {
        integration.custom.socialButtonsRight();
    });
    $(window).scroll(function() {
        integration.custom.socialButtonsTop();
    });
});

integration.custom.socialButtonsRight = function() {
    var width = $(window).width();
    if (width > 1320 || integration.custom.isSuper) {
        var sideWidth = (width - 1320)/2;
        $("#social-buttons").css({"right" : sideWidth - 15});
        $("#main, .footer").css({"z-index" : 1});
    }
}

integration.custom.socialButtonsTop = function() {
    var scroll = $(window).scrollTop();
    var topFrame = $(".ism-frame:nth-of-type(1)").height();
    if (scroll > 200) {
      $("#social-buttons").css({"top": "130px"});
    } else {
      $("#social-buttons").css({"top": topFrame + 168});
    }
}
