integration.meta = {
    'sectionID' : '128878',
    'siteName' : 'i3investor  SG - Desktop - ( SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1040605',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1100,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#header, #submenu, #container, #pagefooter").css({"max-width":"1100px","margin":"0 auto"});
    }
});
