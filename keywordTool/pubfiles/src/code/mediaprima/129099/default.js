integration.meta = {
    'sectionID' : '129099',
    'siteName' : 'HijabnHeels - Desktop - (MY) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055026',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#container-fluid, #footer-wrap, header").css({"max-width": "1170px", "margin": "auto"});
      $('head').append('<style type="text/css">.LeftUpper .text1:after {left: 50px !important;}</style>');
    }
});
