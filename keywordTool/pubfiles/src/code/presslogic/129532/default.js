integration.meta = {
    'sectionID' : '129532',
    'siteName' : 'BusinessFocus - (Publisher Booking) - Desktop - ( HK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1345]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085447',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1085,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#header, #header-small, #footer').css({'max-width': '1085px', 'margin':'0 auto'});
        $('#header-small').css({'left': '0', 'right':'0'});
    }
});
