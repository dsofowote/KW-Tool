integration.meta = {
    'sectionID' : '129287',
    'siteName' : '7 News - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070866',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      window.unloadPageskin = function () {
        try {
          integration.destroy();
        } catch (e) {}
      };
    }
});
