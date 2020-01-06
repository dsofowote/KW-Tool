integration.meta = {
    'sectionID' : '129538',
    'siteName' : ' Jamalouki - Desktop - (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1560]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086019',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1300,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_GetContentHeightVersion': 2
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("header, .header-fixed,.footer-list,#header-menu").css({"max-width": "1300px", "margin": "0 auto"});
        $(" .header-fixed").css({"right": "0px"});
    }
});