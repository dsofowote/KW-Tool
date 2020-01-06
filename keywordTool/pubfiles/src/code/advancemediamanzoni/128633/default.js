integration.meta = {
    'sectionID' : '128633',
    'siteName' : 'Business Insider - Desktop - (IT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027837',
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
      $('#adv-Top').css({
       "display" : "none"
      });
    }
});
