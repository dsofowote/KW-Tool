integration.meta = {
    'sectionID': '130194',
    'siteName': 'Lifestyle - Tablet - (AU) ',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1106529',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1040,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#ContentWrapper").css({ "margin-left": "0px" });
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
        }
    }
});