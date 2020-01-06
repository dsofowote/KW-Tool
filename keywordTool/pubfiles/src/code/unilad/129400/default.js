integration.meta = {
    'sectionID' : '129400',
    'siteName' : 'Unilad - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1370]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1076656',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1110,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#nav, .large-teaser").css({
        "max-width" : "1110px",
        "margin" : "0 auto"
      });
    }
});
