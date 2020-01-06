integration.meta = {
    'sectionID' : '128987',
    'siteName' : 'Racing - Desktop - AU ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1250]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044413',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 990,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#footer_0_divMainFooter, #adTopWidget_divAd, .header-filter, #profile-header").css({
        "width" : "990px",
        "margin" : "0 auto"
      });
      $("body").css({
        "background-color": "#fff"
      });
      $("body.calendar-page #sb-site").css({
        "float": "none"
      });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/305590751/racing', [1, 1]).display();\n<\\script>";
};