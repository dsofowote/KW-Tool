integration.meta = {
    'sectionID' : '128694',
    'siteName' : 'Schaumburger Nachrichten - Tablet - (DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1030609',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 978,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      var headHeight = $(".pdb-navbar").outerHeight();
      var width = $(window).width();
      var ovescrollLeft = width/2 + integration.custom.PageSkinLeftPanel;
      var sideWidth = (width - 978)/2 + 40 + integration.custom.PageSkinRightPanel;
      if ($(".pdb-navbar").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".pdb-navbar");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }

      $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      	});
        $(".page").css({
          "margin" : "auto",
          "margin-top" : "46px",
          "position" : "relative",
          "left" : integration.custom.PageSkinLeftPanel,
          "right" : "0"
        });
        $(".pdb-footer-overscroll").css({
          "width" : "978px",
          "left" : integration.custom.PageSkinLeftPanel,
          "right" : "0"
        });
        $(".pdb-footer-overscroll-radial-progress").css({
          "left" : ovescrollLeft
        });
        integration._addPixel();
        $("#ismIMG").css({
          "height" : "0px"
        });
        $(".usabilla_live_button_container").css({
          "z-index" : "4"
        });
        $("#twslidead").css({
            "right" : sideWidth
        });
        $(".pdb-reference").css({
          "float" : "none"
        });
        $(".pdb-footer-overscroll-content-header").css({
          "margin-left" : -integration.custom.PageSkinLeftPanel
        });
        $(".pdb-footer-overscroll-content-page").css({
          "float" : "none"
        });
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".page").css({
              "margin" : "46px 0 0 0",
              "position" : "relative",
              "left" : "0px"
            });
            $(".usabilla_live_button_container").css({
              "left" : "40%"
            });
            $(".pdb-navbar").css({
              "left" : "0px"
            });
            $(".pdb-footer-overscroll").css({
              "left" : "0px"
            });

        }
    }
});
