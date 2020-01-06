integration.meta = {
    'sectionID' : '128828',
    'siteName' : 'Haus.de - Tablet - (DE AT CH) ',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1036092',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1020,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#site, .mega-menu-submenu").css({"margin":"0 auto","max-width":"1020px"});
        if ($(".header").length == 1) {
                $("<div id='inskinanchor'></div>").insertBefore(".header");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                });
            }
    }
});
