integration.meta = {
    'sectionID': '130178',
    'siteName': 'Elle - Tablet - (AU) ',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1105536',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".header-wrapper").css({ "margin-left": "auto", "margin-right": "auto", "max-width": "1024px" });
        $(".header").css({ "margin": "0 auto", "max-width": "1024px", "left": "unset" });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#app").css({ "max-width": "1024px" });
            $(".off-canvas--left").css({ "transform": "translateX(-470px)" });
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
        }
    }
});