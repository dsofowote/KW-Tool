integration.meta = {
   'sectionID' : '127999',
   'siteName' : 'Rugby Pass - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '965376',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1320,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_StartScrollOnAnchor' : true
 };

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     if ($("#content").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#content");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -268,
            });
        }
        $("body, #template").css({
          "overflow" : "visible"
        });
        window.unloadPageskin = function() {
          try {
            $('body').removeClass('inskinLoaded');
            integration.destroy();
          } catch (e) {};
        }
   }
});

integration.on('layoutChange', function(e){
  integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
  integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
  integration.custom.InSkinBottomNav();
  $( document ).scroll(function() {
      integration.custom.InSkinBottomNav();
  });
  if($(".fixed-header-bg").length == 1){
    integration.base.setCfg({
      plr_ScrollAdjustment : 70
    });
  }
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".brightcove-video-container.fixed").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".brightcove-video-container.fixed").css({
            "margin-bottom" : "0"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/91282419/RugbyOnslaught_Passback_High_Impact\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
