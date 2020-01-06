integration.meta = {
  "sectionID": "125193",
  "siteName": "1Prime",
  "publisher": "bestseller",
  "platform": "desktop"
};

integration.testParams = {
  "desktop_resolution": [0]
};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1010,
  "plr_PageHeightAdjustment": -53,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $('.layout__top_line').css({
      'top' : '0px'
    });
  }
});

integration.on("adServed", function(e) {
  $('.ism-frame').parent().css({
    'z-index' : '2000',
    'top' : '33px'
  });
  $('.projects-bar').css({
    'z-index' : '2001'
  });
});

integration.on("layoutChange", function(e) {
  frtop = -1 * e.data.plr_FrameTop + 'px';
  $('.projects-bar').css({
  	'top' : frtop
  	});
});
