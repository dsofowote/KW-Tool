integration.meta = {
    'sectionID' : '128457',
    'siteName' : 'Uzone ID  - Desktop - ( ID )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1015534',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = ((width - 980)/2) + 10;
      $(".header-top, .top-menu-container, .footer-box").css({
        "margin" : "0 auto",
        "width" : "980px"
      });
      $(".fly-to-top").css({
          "right" : sideWidth
      });
      $("body").css({
        "border" : "none"
      });
      $(".navbar-background").css({
        "box-shadow" : "0px 7px 5px -5px #ccc"
      });
      $("html").css({
        "overflow-x" : "hidden"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinBottomPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".fly-to-top").css({
            "margin-bottom" : footermargin + "px"
        });
    } else if ( docheight - integration.custom.PageSkinBottomPanel > winheight + scrolltop ){
      $(".fly-to-top").css({
          "margin-bottom" : "0px"
      });
    }
}
