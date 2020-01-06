integration.meta = {
    'sectionID' : '129051',
    'siteName' : 'Shortlist.com - Tablet - ( US )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046803',
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
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
