integration.meta = {
    'sectionID': '130193',
    'siteName': 'Lifestyle - Desktop - (AU)',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1300]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1106528',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {}
});