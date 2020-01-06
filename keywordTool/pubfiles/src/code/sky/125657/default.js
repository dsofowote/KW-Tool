integration.meta = {
  "sectionID": "125657",
  "site": "Channel 5",
  "product": "PageSkin",
  "platform": "desktop",
  "restrictions": ""
};




integration.testParams = {
  "desktop_resolution": [0]
};

integration.flaggedTests = [];

integration.params = {

  'mf_siteId': '706746',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 980,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    var windowWidth = $(window).width();
    var sides = (windowWidth - 980) / 2;
    var rowcss = "<style>.bx-wrapper .gallery li{left: -";
    rowcss += sides;
    rowcss += "px !important}</style>";
    $("head").append(rowcss);

    $("footer, #main-content, #main-nav").css({
      "max-width": "980px",
      "margin": "0 auto"
    });
    $("#main-nav").css({
      "z-index": "6",
      "position": "relative"
    });
    $(".leaderboard>div").css({
      "margin": "15px auto"
    });
    $(".pointer-events").css({
      "height": "0px"
    });
    $(".category-bar").css({
      "top": "0"
    });
    var heroTopMargin = 0 - $(".category-bar").outerHeight();
    $(".hero-wide").css({
      "margin-top": heroTopMargin
    });

    // hide leaderboard ad slots
    $("#div-gpt-ad-1_pixel, #div-survey-1_pixel, .container-fluid.leaderboard").css({
      "display": "none"
    });
  }
});

integration.on('adServed', function(e) {
  $(".ism-frame").parent().css({
    "z-index": "7"
  });
});

integration.on('layoutChange', function(e) {
  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
  var windowWidth = $(window).width();
  var cwidth = windowWidth - 980;
  var sides = 0 - (cwidth - integration.custom.FrameSideRight);
  $(".schedule-dates, .schedule-channels").css({
    "max-width": "980px",
    "left": "0px",
    "right": "0px",
    "margin": "0 auto"
  });
});

/* Passback Tag */
ISMPassback = function() {
  return "<!--  Begin Rubicon Project Tag -->\n<!--  Site: Sky UK Channel 5   Zone: Desktop - ROS   Size: Leaderboard  -->\n<!--  PLACEMENT: Above the Fold;   -->\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = '7908';\nrp_site      = '59754';\nrp_zonesize  = '284360-2';\nrp_adtype    = 'js';\nrp_smartfile = '[SMART FILE URL]';\n<\\script>\n\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/7908.js\"><\\script>\n<!--  End Rubicon Project Tag -->";
};
