integration.meta = {
    'sectionID' : '129524',
    'siteName' : 'Mix Network - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085433',
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
      var rightWidth = (($(window).width() - 980) / 2) + 10;
      $("#page").css({
        "background-image" : "none"
      });
      $("#global-footer").css({
          "max-width": "980px",
          "margin": "0 auto"
      });
  		$("head").append("<style>.ia-player-outer-container.vjs-iscurrent-player.stickified {right: " + rightWidth +"px !important;}</style>");
    }
});


integration.on("adServed", function(e) {
    var headHeight = $(".po-audio-player__main-container").outerHeight() + $("#primary-nav").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
