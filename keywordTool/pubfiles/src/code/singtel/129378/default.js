integration.meta = {
    'sectionID' : '129378',
    'siteName' : 'HungryGoWhere - (Publisher Booking) - Desktop - ( SG )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1304]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1074832',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1044,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".main-navi-wrapper").outerHeight();
      integration.base.setCfg({
        "plr_ScrollAdjustment" : headHeight
      });
      $('#header, #footer').css({
        "max-width" : "1044px",
        "margin" : "0 auto"
      });
      $('.full-box').css({
        "box-shadow" : "none",
        "-webkit-box-shadow" : "none"
      });
    }
});
