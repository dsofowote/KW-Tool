integration.meta = {
    'sectionID' : '130205',
    'siteName' : 'El Pais - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1256]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1106987',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 996,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});

integration.on("adServed", function(e) {

      $(".ism-anchor").css({"z-index" : "10000001"});

});
