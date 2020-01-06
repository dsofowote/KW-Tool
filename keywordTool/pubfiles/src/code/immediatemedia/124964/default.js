integration.meta = {
  'sectionID': '124964',
  'siteName': 'Radio Times - Desktop - (UK)',
  'platform': 'desktop'
};

function setWindow() {
  return currentWindow.top;
}

integration.testParams = {
  'desktop_resolution': [1240]
};

integration.params = {

  'mf_siteId': '681713',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 980,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "[id^=google_ads_]",
  "plr_HideElementsByClass": "",
  "plr_FastInit" : true,
  "plr_PageScanExclude": ".layout-md-rail__secondary, .article-list-new, .footer-promotional, .OUTBRAIN, script"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $('body').addClass('ad-inskin-active');
    $("#global-banner-ad, #adBannerSpacer").css({
      "min-height": "0",
      "padding": "0"
    });
    $("#outerwrapper, #header, #adBannerSpacer, #footer, .full-width-background").css({
      "max-width": "980px",
      "margin": "0 auto"
    });
    $("body").css({
      "background-image": "none"
    });
    $("#adBannerSpacer").css({
      "padding-top": "10px"
    });
    $("#adBannerSpacer").hide();
    $(".full-span-background").css({
      "max-width": "980px",
      "margin": "auto"
    });
    $(".leaderboard-ad").css({
      "height": "0px"
    });
    $(".eyebrow").css({
			"border-bottom" : "0px solid #fff"
		});
    window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
  }
});
//This code hides Pageskin when the user opens their print window, then re-opens it immediately afterwards
(function() {
  var beforePrint = function() {
    integration.base.hideAd();
  };
  var afterPrint = function() {
    integration.base.showAd();
  };
  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    });
  }
  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
})();

/* Passback Tag */
window.ISMPassback = function() {
  return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\nconsole.log(event);\nvar h = event.size[0];\nif(w==728)\n{\nself.frameElement.style.setProperty (\"width\", '728px');\nself.frameElement.style.setProperty (\"height\",'90px');\n}});\ngoogletag.pubads().definePassback('176986657/tracking.immediate.co.uk/pgrunofnetwork-passback', [[970,250],[728,90]]).setTargeting('thirdparty',['inskin']).display();\n<\\script>";
};
