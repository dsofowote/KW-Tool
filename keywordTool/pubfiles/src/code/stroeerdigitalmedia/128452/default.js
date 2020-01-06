integration.meta = {
   'sectionID' : '128452',
   'siteName' : 'Watson - Smartphone - (AT CH DE)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1015076',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headHeight = $(".logoblock").height();
     var width = $(window).width();
     integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
     var contWidth = $(window).width() - integration.custom.PageSkinRightPanel;
     if ($(".logoblock").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".logoblock");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
      $("#inskinanchor").css({
         "top" : headHeight,
         "position" : "relative"
       });
       if ($(".currentblock.show_on_mobile").css("display") == "block" || $(".currentblock.show_on_mobile").css("display") == "inline-block"){
         var currentblockHeight = $(".currentblock a").height();
         $("#inskinanchor").css({
            "margin-top" : currentblockHeight
          });
       }
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .widget.sharebuttons{width: Calc(' + contWidth + 'px - 32px - 4.6em);}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    var stylesCSS = '<style id="inskinStyles" type="text/css">';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
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
        var newStyles = "body .w-bubble, .widget.sharebuttons{margin-bottom:" + footermargin + "px !important;}";
    } else if ( docheight - integration.custom.PageSkinBottomPanel > winheight + scrolltop ){
      var newStyles = "body .w-bubble, .widget.sharebuttons{margin-bottom: 0px !important;}";
    }
    document.getElementById("inskinStyles").innerHTML = newStyles
}

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   $("#inskinStyles").remove();
});
