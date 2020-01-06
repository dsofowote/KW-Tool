integration.meta = {
    'sectionID' : '129268',
    'siteName' : 'Lad Bible - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1069806',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : -96
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
$(".contents, footer").css({"margin": "0 auto", "max-width": "1100px"});
$(".comp_Side_links").css({"z-index": "5"});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $("header").outerHeight();
  $(".ism-anchor").css({"top": headHeight});
});
