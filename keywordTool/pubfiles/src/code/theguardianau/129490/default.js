integration.meta = {
    'sectionID' : '129490',
    'siteName' : 'The Guardian AU - (Creative Approval) - Desktop - (NZ)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082483',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".facia-page, #bannerandheader, .dumathoin, footer, .fc-container, section, article, .l-side-margins, body").css({
          "max-width" : "1300px",
          "margin" : "0 auto"
        });
        $('.top-banner-ad-container').css({'display':'none'})
    }
});

integration.on('adServed', function(e) {
  $(".ism-anchor").css({"z-index": "1011"});
});
