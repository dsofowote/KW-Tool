integration.meta = {
    'sectionID' : '128983',
    'siteName' : 'Cricbuzz - Desktop - ( AU )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044331',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".cb-footer .cb-col").css({
        "float" : "none !important"
      });
      $(".feedback-bar, .cb-footer").css({
        "width" : "980px",
        "margin" : "0 auto"
      });
      $(".feedback-bar").css({
        "left": "0",
        "right" : "0"
      });
      $(".cb-footer").css({
        "left" : "50%",
        "-webkit-transform" : "translateX(-50%)",
        "transform" : "translateX(-50%)"
      });
      $("head").append('<style>.cb-footer.cb-col{float: none !important;} </style>');
    }
});
