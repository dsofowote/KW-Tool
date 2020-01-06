integration.meta = {
    'sectionID' : '129815',
    'siteName' : 'The Brag - Tablet - (AU)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089822',
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
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $("#main").css({"margin-left": "0px"});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});

integration.on("layoutChange", function(e) {
    $('.l_toggle_menu_network, .navbar-toggler').on('click', function() {
        $("#navbarContent").toggleClass("expanded");
    });
});
