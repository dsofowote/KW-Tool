integration.meta = {
  'sectionID' : '128806',
  'siteName' : 'Pitchero - Desktop - (UK)',
  'platform' : 'desktop'
};

integration.testParams = {
  'desktop_resolution' : [1284]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
  'mf_siteId' : '1035631',
  'plr_PageAlignment' : 'center',
  'plr_ContentW': 1024,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID' : '',
  'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {

  }
});

integration.on('adServed', function(e) {
  $(".ism-anchor").css({"z-index": "0"});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/MMPlus/Pitchero/Passback/1x1', [[1,1]]).setTargeting('Passback', ['InSkin']).setClickUrl('%%CLICK_URL_UNESC%%').display();</script>";
};

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/MMPlus/Pitchero/Passback/1x1', [[1,1]])\n.setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>";
};
