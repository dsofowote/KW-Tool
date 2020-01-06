integration.meta = {
    'sectionID' : '128800',
    'siteName' : 'TV Tonight - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1035565',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1140,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.strip-global, footer.full-width').css({
        "max-width" : "1140px",
        "margin" : "0 auto"
      });
      $('.strip-global').css({
        "padding-left" : "10px",
        "padding-right" : "10px"
      });
    }
});
