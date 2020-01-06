integration.meta = {
   'sectionID' : '128441',
   'siteName' : 'Watson - Desktop - ( AT CH DE )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1336]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1013492',
   'plr_PageAlignment' : 'custom',
   'plr_FramePositionCSS' : 'margin: 0 auto; left: -150px;',
   'plr_ContentW': 1016,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headHeight = $(".desktopnavi").height();
     if ($(".desktopnavi").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".desktopnavi");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
      $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      	});
        $("html").css({
          "overflow-x" : "hidden"
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

integration.on("adServed", function(e) {
    var frames = $(".ism-frame");
    var panelWidth = $(frames[3]).width();
    $("body .w-bubble").css({
        "left" : panelWidth + 10
    });
    $("head").append("<style>.widget.sharebuttons.show {left:" + (panelWidth + 10) + "px !important;}</style>");
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinBottomPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $("body .w-bubble").css({
            "margin-bottom" : footermargin + "px"
        });
        $(".widget.sharebuttons.show").css({
            "margin-bottom" : (footermargin + 56) + "px"
        });
    } else if ( docheight - integration.custom.PageSkinBottomPanel > winheight + scrolltop ){
      console.log("TOP");
      $("body .w-bubble").css({
          "margin-bottom" : "0px"
      });
      $(".widget.sharebuttons.show").css({
          "margin-bottom" : "56px"
      });
    }
}
