integration.meta = {
    'sectionID' : '129511',
    'siteName' : 'Johnston Press RON - (NEW LAYOUT) Desktop - ( UK )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1242]
};

integration.flaggedTests = [];

integration.channelHome = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
    'mf_siteId' : '1085407',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 982,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $("#header").outerHeight();
      if ($("#header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#header");
        integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_PageHeightAdjustment : -headerHeight
        });
          }
          $("body > footer").css({
            "padding-bottom" : "0px"
          });
          $("#header").css({
            "z-index": "99999999"
          });
          $("footer, #footer").css({
            "max-width" : "982px",
            "margin" : "0 auto"
          });
          $("footer").css({
            "float" : "none"
          });
      $("head").append("<style>#ensNotifyBanner{width: 982px; margin: 0 auto;}</style>");
    }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({"z-index":"10000002"});
  });

  /* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s)t{d=w.document;w.ggpid=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}t(top,13429));<\\script>";
};
