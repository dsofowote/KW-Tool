integration.meta = {
    'sectionID': '130204',
    'siteName': 'AS - Tablet - (ES)',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1106986',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($(".headerAs").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".headerAs");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -120,
                plr_ScrollAdjustment: -70
            });
        }
        $(".headerAs").css({ "margin-bottom": "0" });
        if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $(".contenedor_portada, .container").css({ "margin-left": "0" });
            $("footer, .header-seccion, .nav-seccion").css({ "max-width": "980px" });
            integration.base.setCfg({ 'plr_PageAlignment': 'left' });
        }
    }
});