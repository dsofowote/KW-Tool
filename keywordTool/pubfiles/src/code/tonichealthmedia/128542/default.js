integration.meta = {
    'sectionID' : '128542',
    'siteName' : 'My Dr - Desktop - (INT)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1021763',
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
      $(".fluid-container, .dropdown.menu-large > .col-xs-12").css({
        "width" : "1170px",
        "margin" : "0 auto"
      });
      $(".dropdown.menu-large > .col-xs-12").css({
        "left" : "0px",
        "right" : "0px"
      });
      $(".container.footer-content").css({
        "width" : "1150px",
        "padding-left" : "0px"
      });


    }
});
