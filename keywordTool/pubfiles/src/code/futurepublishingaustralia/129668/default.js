integration.meta = {
    'sectionID' : '129668',
    'siteName' : 'Gamesradar - Desktop - (SG) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086276',
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
        $('.slot-lightbox1').css({'display':'none'});
    }
});