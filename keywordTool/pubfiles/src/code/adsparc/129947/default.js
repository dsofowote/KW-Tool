integration.meta = {
    'sectionID' : '129947',
    'siteName' : 'Starts at 60 - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098921',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#starlord_navbar, #starlord_collection, #starlord_footer, #starlord_article").css({
        "width" : "1180px",
        "margin" : "0 auto"
      });
    }
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/29816\"><\\script>";
};
