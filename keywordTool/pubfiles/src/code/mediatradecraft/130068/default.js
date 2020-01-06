integration.meta = {
    'sectionID' : '130068',
    'siteName' : ' Just Jared JR - Desktop - (INT) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1102124',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#frame, #footer").css({
            "float" : "none"
          });
        $(".topads").css({
            "display" : "none"
          });
    }
});
