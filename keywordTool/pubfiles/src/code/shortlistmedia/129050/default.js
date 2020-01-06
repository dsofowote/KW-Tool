integration.meta = {
    'sectionID' : '129050',
    'siteName' : 'Shortlist.com - Desktop - ( US )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046802',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1110,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.css-mks6l2, .css-xhvecb, .css-115j0qt, .css-o5n9b5, .css-1vlbyz6').css({'width':'1100px', 'margin': '0 auto'});
    }
});
