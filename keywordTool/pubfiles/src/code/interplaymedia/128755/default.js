integration.meta = {
    'sectionID' : '128755',
    'siteName' : 'NBL - Tablet - (AU) ',
    'platform' : 'tablet'
};

integration.testParams = {

};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034051',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var footermargin = $("#scheduleContainer").height() + $(".row-xs-12").height();
      console.log(footermargin);
      $(".home-bg-cover").css({"top":"0"});
      $("head").append("<style>body{overflow: initial !important;}</style>");
      $("footer").css({"max-width":"1170px", "margin":"auto"});
      $("footer div.footer-navigation-container .col-md-5").css({"padding-right":"20px", "height":"0vh"});
      $("#nbl-schedule .page-schedule-content .panel-group .panel-body .gameschedule-container").css({"padding": "5px 0px 10px 20px"});
      $("#nbl-schedule .page-schedule-content .panel-group").css({"margin-left": "-60px"});
      $("div#nbl-stats-central .page-stats-central-content #dashboard .col-md-8").css({"padding":"0 7.5px 15px 20px"});
      if ($("#tophdr").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#google-ad-container"); /* use .main-content if no .google-ad-container*/
                 integration.base.setCfg({
                'plr_AnchorParent' : "#inskinanchor",
              //  'plr_ScrollAdjustment' : - $(".row-xs-12").height(),
                'plr_PageHeightAdjustment' : -footermargin,
          //      'plr_EnableActiveResize' : false
           });
        }
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
          $(".container-fluid").css({"margin-left": "0", "padding-left": "0"});
          $(".container").css({"margin-left": "0", "padding-left": "0"});
          $("footer").css({"margin-left": "0px", "padding-left": "0"});
          $(".row").css({"margin-left": "0"});
    //Next line for players page only:
    //      $("head").append("<style>body {margin-left: 0px !important;}</style>");
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
      // integration._addPixel();
});
