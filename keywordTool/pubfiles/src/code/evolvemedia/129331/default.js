integration.meta = {
    'sectionID' : '129331',
    'siteName' : 'Dogtime - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1072857',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true,
    'plr_PageHeightAdjustment' : -111
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#js-leaderboard").css({"display": "none"});
    }
});

integration.on('adServed', function(){
    $(".ism-anchor").css({
        "top" : "111px"
    });
});
