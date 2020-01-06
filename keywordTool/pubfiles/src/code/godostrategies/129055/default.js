integration.meta = {
    'sectionID' : '129055',
    'siteName' : ' La Vanguardia - Desktop - (ES) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1268]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1046807',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1008,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".container-header, .footer-wrapper, .item, .header, .main").css({"max-width": "1008px", "margin": "auto"});
      $("head").append("<style> html {overflow-y: unset!important}</style>");
    }
});
