integration.meta = {
    'sectionID' : '129578',
    'siteName' : 'PC Gamer - Desktop - ( ASIA ) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085575',
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
        $('.primary-nav, #document-footer').css({'max-width':'970px', 'margin':'0 auto'});
        $('.skyscraper-container').css({'display':'none', 'margin':'0 auto'});
        $('body').append('<style>.visible_player{right:200px !important}</style>');
    }
});
