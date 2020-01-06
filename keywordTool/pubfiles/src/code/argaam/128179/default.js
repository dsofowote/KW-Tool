integration.meta = {
   'sectionID' : '128179',
   'siteName' : 'Argaam.com - Smartphone- (MENA)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '987092',
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
     var pathArray = window.location.pathname.split( '/' );
     var segment_1 = pathArray[1];
     var windowWidth = $(window).width();

     var nav = $('nav.fixed').outerHeight();
     var futures = $('#divFuturesDataHolder').outerHeight();
     var indicators = $('#divIndicatorsDataHolder').outerHeight();
     var hh = nav + futures + indicators;
     if ($(".mobile-data-container").length == 1) {
           $("<div id='inskinanchor'></div>").insertBefore(".mobile-data-container");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -hh,
           });
       }

     $("#inskinanchor").css({
        "top" : hh,
        "position" : "relative"
      });

      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded nav{left:0px;}';
      stylesCSS += '.inskinLoaded #divFuturesDataHolder, .inskinLoaded #divIndicatorsDataHolder{left:0px!important;}';
      stylesCSS += '.inskinLoaded .plus-mobile-menu.show{z-index:12;}';
      stylesCSS += '.inskinLoaded body.fixed.menuOpen{right: 0; top: -' + hh + 'px!important;}';
      stylesCSS += '.inskinLoaded .share-tool{z-index:4; right: inherit; left: 0;}';
      stylesCSS += '.inskinLoaded .mobile-data-container.slideout{-webkit-transform: translateY(-120px); transform: translateY(-120px);}';

      stylesCSS += '</style>'
      $('head').append(stylesCSS);

      if (segment_1 == "en") {
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .fixed.menuOpen{left: 0;}';
        stylesCSS += '.inskinLoaded .plus-mobile-menu.show{left: 0;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        }else{
          var stylesCSS = '<style type="text/css">';
          stylesCSS += '.inskinLoaded .fixed.menuOpen{right: 0;}';
          stylesCSS += '.inskinLoaded .plus-mobile-menu.show{right: 0;}';
          stylesCSS += '.inskinLoaded .mobile-data-container.slideout{-webkit-transform: translateX(-186px); transform: translateX(-186px);}';
          stylesCSS += '</style>'
          $('head').append(stylesCSS);
        }

        if (windowWidth <= 405) {
          var stylesCSS = '<style type="text/css">';
          stylesCSS += '.inskinLoaded .table td, .table th, ul.table li{padding: 6px 0px;}';
          stylesCSS += '</style>'
          $('head').append(stylesCSS);
          }
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded #dvArgPulseTap {right: ' + integration.custom.PageSkinRightPanel + 'px;}';
    stylesCSS += '.inskinLoaded .share-tool {width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);

    $(".search.pull-left").click(function(){
    $("#dvArgPulseTap").toggle();
    });
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   $('#inskinanchor').remove();
});
