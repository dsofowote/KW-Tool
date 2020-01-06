integration.meta = {
  'sectionID': '129492',
  'siteName': 'Raider.io - Desktop - ( INT )',
  'platform': 'desktop'
};

// integration.async = false;

integration.testParams = {
  'desktop_resolution': [1620]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId' : '1082485',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1360,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': '',
  // 'plr_ServePassbackInIframe': false
  'plr_PassbackIframeStyle': 'width: 1px; height: 1px;'
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    $('body').addClass('inskinLoaded');
    $(".sticky-outer-wrapper").css({
      "margin": "0 auto",
      "max-width": "1360px"
    });
    $("#application").css({
      "height": "auto"
    });
    window.unloadPageskin = function() {
      try {
        integration.destroy();
      } catch (e) {}
    };
  }
});


/* Passback Tag */
window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/29151\"><\\script>";
};


