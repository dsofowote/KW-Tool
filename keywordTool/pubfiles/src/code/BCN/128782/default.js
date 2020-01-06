integration.meta = {
    'sectionID' : '128782',
    'siteName' : 'Haus.de - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1340]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034633',
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
