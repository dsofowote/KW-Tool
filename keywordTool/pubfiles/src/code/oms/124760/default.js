integration.meta = {
  "sectionID": "124760",
  "siteName": "Neue Presse Coburg",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706574',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": "",
  //"plr_FramePositionCSS" : "margin:0 auto;border-right:158px solid transparent"
};

integration.on('adCallResult', function(){
      $("head").append("<style>.stickyNavigation {margin-top:0px !important;}</style>");
      $("#page, #mypage").css({
        "margin" : "0 auto"
      });

      $("#superbanner").hide();
});