integration.meta = {
    'sectionID' : '129544',
    'siteName' : 'Ounousa - Desktop - (MENA)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086024',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".wrapper, .header,.subtitles-listing").css({"max-width": "970px", "margin": "0 auto"});
        $('head').append('<style>.slider-section {position: fixed !important}</style>');
        $('head').append('<style>.dropdown-category {width: 970px !important}</style>');
    }
});
