integration.meta = {
    'sectionID' : '128513',
    'siteName' : 'autoblog.nl-desktop-(NL)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1020893',
  'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".ab_top_header, .ab_widgets_section, .ab_copyright_section").css({
        "width" : "970px",
        "margin" : "0 auto"
      });
      $("footer .ab_copyright_section").css({
        "background-image" : "none",
        "height" : "auto"
      });
      $("body").css({
        "background-color" : "white"
      });
    }
});
