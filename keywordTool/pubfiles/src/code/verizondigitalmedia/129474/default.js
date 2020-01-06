integration.meta = {
  'sectionID': '129474',
  'siteName': 'MSN FRANCE  - Desktop - ( FR )',
  'platform': 'desktop'
};

integration.testParams = {
  'desktop_resolution': [1540]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId': '1080058',
  'plr_PageAlignment': 'center',
  'plr_ContentW': 1280,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID': '',
  'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    $(".mestripescrollfix").css({"max-width": "1275px", "margin": "0"});
  }
});

integration.on("layoutChange", function(e) {
  $(".paddle.next a").css({"right": "0"});
  $(".paddle.previous a").css({"left": "0"});
  $(".ism-anchor").css({"z-index": "99999"})
  integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
  var width = $(window).width();
  var sideWidth = (width - 1275) / 2;
  $(".head").css({
    "top": integration.custom.PageSkinTopPanel + "px",
    "max-width": "1275px",
    "left": sideWidth
  });
  $("::before, ::after").css({
    "display": "none"
  });
  integration.custom.headMove();
  $(window).resize(function() {
    integration.custom.headMove();
  });

  integration.custom.InSkinBottomNav();
  $(document).scroll(function() {
    integration.custom.InSkinBottomNav();
  });
});

integration.custom.InSkinBottomNav = function() {
  var scrolltop = $(document).scrollTop();
  var headerTop = integration.custom.PageSkinTopPanel - scrolltop;
  if (headerTop > 0) {
    $(".head").css({
      "top": headerTop + "px"
    });
  } else {
    $(".head").css({
      "top": "0"
    });
  }
}

integration.custom.headMove = function() {
  var width = $(window).width();
  var sideWidth = (width - 1275) / 2;
  $(".head").css({
    "left": sideWidth
  });
}
