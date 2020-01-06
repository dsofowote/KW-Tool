integration.meta = {
    'sectionID' : '129228',
    'siteName' : 'Sports News Ireland - Desktop - ( IE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1376]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1066765',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1116,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".td-header-wrap, .td-footer-wrapper, .td-sub-footer-container").css({"max-width": "1116px", "margin": "0 auto"});
    }
});


integration.on("layoutChange", function(e) {
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
  $(".td-header-menu-wrap.td-affix").css({"max-width": "1116px"});
}
