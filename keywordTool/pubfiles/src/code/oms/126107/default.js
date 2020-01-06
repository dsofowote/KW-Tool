integration.meta = {
    'sectionID' : '126107',
    'siteName' : 'Lahrer Zeitung - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706945',
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
      var width = $(window).width();
      var sideWidth = (width - 1200)/2;
      $('.article-social-bar').addClass('fixed');
      $(".site").css({
        "padding-left" : "0px",
        "margin" : "0 auto"
      });
      $(".article-social-bar ol li").css({
        "padding" : "2px 0"
      });
      $("#article-social-bar ol").css({
        "padding" : "0"
      });
      $(".article-social-bar").css({
        "position" : "fixed",
        "left" : "392.5px"
      });
      $(".article-social-bar ol li a").css({
        "width" : "30px",
        "height" : "30px"
      });
      $('.article-social-bar ol li a [class^="icon-"]').css({
        "line-height" : "30px"
      });
      $("head").append('<style>[data-layout="desktop"] #banner{margin-left: 0px !important; margin: 10px auto !important;} </style>');
    }
});
