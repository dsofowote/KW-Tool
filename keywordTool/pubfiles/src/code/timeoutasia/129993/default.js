integration.meta = {
    'sectionID' : '129993',
    'siteName' : 'Timeout Asia - Desktop - (SG) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#header, .site-footer ').css({'max-width':'1200px', 'margin':'0 auto'});
        $('head').append('<style>.xs-mr5{margin-right:2rem !important}</style>');
    }
});
