integration.meta = {
    'sectionID' : '130087',
    'siteName' : 'That\'s Life - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102602',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1245,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : '45'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".PageWrap").css({"margin": "0 auto", "max-width": "1245px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".PageWrap").css({"max-width": "1245px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});