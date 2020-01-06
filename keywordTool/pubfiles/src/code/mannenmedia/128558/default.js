integration.meta = {
    'sectionID' : '128558',
    'siteName' : ' Vi.nl - Desktop - (NL) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1023124',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("html").css({
          "margin-top" : "90px"
      });
      $(".o-wrapper-first").css({
          "margin-top" : "0px"
      });
      $(".main-content").css({
          "margin-top" : "15px"
      });
      $(".c-page-footer, .c-pro-ticker, .main-content").css({
          "width": "1200px",
          "margin" : "0 auto",
          "left" : "0",
          "right" : "0",
          "z-index" : "5"
      });

      $(".o-layout.o-layout--center").css({
          "height" : "0px"
      })
    }
});
