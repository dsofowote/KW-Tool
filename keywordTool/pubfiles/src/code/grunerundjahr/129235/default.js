integration.meta = {
    'sectionID' : '129235',
    'siteName' : 'NTV - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1066962',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1036,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".sitewrapper, .metawrapper").css({"max-width": "1036px", "margin":"auto"});
      $('head').append('<style>body.sticky .header{margin-left: calc(50% - 0px) !important}</style>');
      integration.base.setCfg({
        plr_ScrollAdjustment : 80,

    });
      $('head').append('<style type="text/css">body.sticky .header {margin-left : 50% !important;}</style>');
      $('head').append('<style type="text/css">body {margin-top : 0 !important;}</style>');
      $('head').append('<style type="text/css">.container.sitewrapper {margin-left : 0px !important;}</style>');
    }
});
