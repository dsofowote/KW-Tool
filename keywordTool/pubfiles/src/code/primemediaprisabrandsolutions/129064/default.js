integration.meta = {
    'sectionID' : '129064',
    'siteName' : 'Mamas &amp; Papas - Desktop - (ES)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1256]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047223',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 996,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('body').append('<style>.cabecera{max-width:996px !important ; margin: 0 auto; right: 0}</style>');
      $('body').append('<style>.seccion-submenu{max-width:996px !important ; margin: 0 auto; right: 0}</style>');

    }
});
