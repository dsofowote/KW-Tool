integration.meta = {
    'sectionID' : '128754',
    'siteName' : 'NBL - Desktop - (AU) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034050',
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
     $(".home-bg-cover").css({"top":"0"});
     $("head").append("<style>body{overflow: initial !important;}</style>");
     $("footer").css({"max-width":"1170px", "margin":"auto"});
     $("footer div.footer-navigation-container .col-md-5").css({"padding-right":"20px"});
     $("#nbl-schedule .page-schedule-content .panel-group .panel-body .gameschedule-container").css({"padding": "5px 0px 10px 20px"});
     $("#nbl-schedule .page-schedule-content .panel-group").css({"margin-left": "-60px"});
     $("div#nbl-stats-central .page-stats-central-content #dashboard .col-md-8").css({"padding":"0 7.5px 15px 20px"});
     if ($("#tophdr").length == 1) {
           $("<div id='inskinanchor'></div>").insertBefore("#google-ad-container"); /* use .main-content if no .google-ad-container*/
                integration.base.setCfg({
               'plr_AnchorParent' : "#inskinanchor",
               'plr_ScrollAdjustment' : - $(".row-xs-12").height(),
               'plr_PageHeightAdjustment' : -footermargin,
               'plr_EnableActiveResize' : false
          });
       }
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
        //    console.log(scrolltop);
        $(".footer-navigation-container").css({
            "margin-bottom" : footermargin + "px"
        });
  }
}
