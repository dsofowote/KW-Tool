integration.meta = {
    'sectionID' : '130189',
    'siteName' : 'Fox Sports - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1106524',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1280,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#top-ads-container').css({'display':'none'})
    }
});