integration.meta = {
    'sectionID' : '129201',
    'siteName' : 'Outdoor Channel  - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063664',
    'plr_PageAlignment' : 'custom',
    'plr_FramePositionCSS' : 'left: -80px; margin: 0 auto;',
    'plr_ContentW': 1050,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".mps-footer").css({
        "max-width" : "1050px",
        "margin" : "0 auto",
        "left" : "-80px"
      });
      $(".mps-social.scroll").css({
        "margin-left" : "-600px"
      });
    }
});
