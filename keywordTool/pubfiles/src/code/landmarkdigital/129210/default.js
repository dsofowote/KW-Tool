integration.meta = {
    'sectionID' : '129210',
    'siteName' : ' Benchwarmers - Desktop - (IRE) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1063921',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 56,
    'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOiIvSAOiIvSAAKABBENBxoAAAAiCAKAAWABcAEAAMgAiABHgCcAJ4AlgCEAGBA'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".header").css({"display": "none"});
    }
});

integration.on("adServed", function(e) {
	    $(".ism-frame").parent().css({"z-index" : "99"});
});
