integration.meta = {
   'sectionID' : '127626',
   'siteName' : 'ICON - Desktop - (SG)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1330]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '775802',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1070,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = (width - 1060)/2;
     var adUnitHeight = $("#zone-skinning").height();
     var headHeight = $("#sph_network_banners").innerHeight();
     if ($("body > #sph_network_banners").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > #sph_network_banners");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -40,
                plr_StartScrollOnAnchor : true
            });
        }
    $("#btn-btt").css({
        "right" : sideWidth + 20
    });
    $("#inskinanchor").css({
      "margin-top" : headHeight - adUnitHeight,
      "position" : "relative"
    });
    $("#sph_network_banners").css({
      "margin-bottom" : "0px"
    });

   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $(window).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if(scrolltop > integration.custom.PageSkinTopPanel + 50){
      integration.base.setCfg({
        plr_ScrollAdjustment : 35
      });
    } else {
      integration.base.setCfg({
        plr_ScrollAdjustment : 0
      });
    }
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $("#btn-btt").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#btn-btt").css({
            "margin-bottom" : "0"
        });
    }
}
