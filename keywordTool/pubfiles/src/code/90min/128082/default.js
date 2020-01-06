integration.meta = {
   'sectionID' : '128082',
   'siteName' : ' DBL Tap - Smartphone - (UK)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '974736',
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

     if ($("#site-header").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("#site-header");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -44,
           });
       }

    var headHeight = $("#site-header").innerHeight();
     $("#inskinanchor").css({
     		"top" : headHeight,
     		"position" : "relative"
     	});

      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .header-container{box-shadow: none!important; -webkit-box-shadow: none!important;}';
      stylesCSS += '.inskinLoaded .social-header{margin: 0 0 15px 0!important;}';
      stylesCSS += '.inskinLoaded ul > li:not(:first-child) > a > div > div > div.video__link > h3{width: 43vw!important;}';
      stylesCSS += '.inskinLoaded .page-wrap__main{padding-bottom: 15px!important;}';
      stylesCSS += '.inskinLoaded .isDesktop .next-post-button--body{right: 15px!important;}';
      stylesCSS += '.inskinLoaded .share-component--post-bottom.slide{z-index: 1!important;}';

      stylesCSS += '</style>'
      $('head').append(stylesCSS);
      $("head").append("<style>.inskinLoaded #site-header.site-header{box-shadow: none!important; -webkit-box-shadow: none!important; box-shadow: none!important;}");

   }
});

integration.on("layoutChange", function(e) {

  integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
  integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;

  var stylesCSS = '<style id="inskinStyles" type="text/css">';
  stylesCSS += '</style>'
  $('head').append(stylesCSS);

    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });

    $("head").append("<style>.inskinLoaded .social-bar-container > .reactions{width: calc(98vw - " + integration.custom.PageSkinRightPanel + "px)!important;}");
    $("head").append("<style>.inskinLoaded .next-post-button--body{right: " + integration.custom.PageSkinRightPanel + "px!important; z-index:2;}");

});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    var sideWidth = (width - integration.custom.PageSkinRightPanel);
        $(".share-component--post-bottom").css({
            "width" : sideWidth
        });
}

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   $('#inskinanchor').remove();
});
