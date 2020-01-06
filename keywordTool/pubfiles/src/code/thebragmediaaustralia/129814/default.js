integration.meta = {
    'sectionID' : '129814',
    'siteName' : 'The Brag - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1089821',
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
    }
});

integration.on("layoutChange", function(e) {
    $('.l_toggle_menu_network, .navbar-toggler').on('click', function() {
        $("#navbarContent").toggleClass("expanded");
    });
});
