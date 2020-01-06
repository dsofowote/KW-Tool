integration.meta = {
  'sectionID': '128964',
  'siteName': 'Brigitte  - Desktop - ( AT CH DE )',
  'platform': 'desktop'
};

integration.testParams = {
  /* No Screen Resolution check */
  'desktop_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1044123',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 960,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  'plr_FastInit' : true,
  'plr_CheckOptOut' : true,
  'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    var width = $(window).width();
    var wrapperWidth = $(".main-wrapper").width();
    var sideWidth = (width - wrapperWidth)/2;
    $(".dssStage").css({	"display": "none"	});
    $("#google_center_div").css({	"display": "none"	});
    $(".brigitte-vergleich-wrapper, .brigitte-vergleich-wrapper-inside").css({	"max-width": "960px", 'margin': '0 auto'	});
    $(".sticky-vergleich").css({	"right": '0px'});
  }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    var sideWidth = (width - 960)/2; /* content width divided by 2 */
    if (width < 1840 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        console.log(sideWidth);
        $(".m-sharing-toolbar-vertical").css({
            "left" : sideWidth - 70
        });
    } else {
        $(".m-sharing-toolbar-vertical").css({
            "left" : sideWidth - 70
        });
    }
}
