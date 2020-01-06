integration.meta = {
    'sectionID' : '128567',
    'siteName' : 'LBC - Desktop - (MENA) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1472]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1023809',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1212,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $(".DivHeader").height();
      var width = $(window).width();
      var sideWidth = (width - 1212)/2;
      if ($(".DivHeader").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".DivHeader");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headerHeight,
                plr_ScrollAdjustment : -65
            });
        }
      $("#inskinanchor").css({
      		"top" : headerHeight,
      		"position" : "relative"
      });
      $("#BlockedNotfificationMessage").css({
          "right" : sideWidth
      });
      $("#ctl00_MainContent_NewsDetailsContent1_ImgContainer, #ctl00_MainContent_NewsDetailsContent1_ScrollingDiv, #ctl00_MainContent_News_RecommendedFull2_LBCIrecommended, .FooterContent").css({
        "width" : "1212px",
        "margin" : "0 auto"
      });
      $("#ctl00_MainContent_NewsDetailsContent1_ScrollingDiv").css({
        "left" : "0",
        "right" : "0"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
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
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $("#BlockedNotfificationMessage").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#BlockedNotfificationMessage").css({
            "margin-bottom" : "0"
        });
    }
}
