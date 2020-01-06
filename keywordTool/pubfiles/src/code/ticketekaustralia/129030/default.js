integration.meta = {
    'sectionID' : '129030',
    'siteName' : 'Ticketek - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1045591',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1007,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("#mastHeadNew, #mastHead").css({
        "width" : "1007px",
        "margin" : "0 auto"
      });
      $("#mastHead").css({
        "left" : "0",
        "right" : "0"
      });
      $("#wrapBody").css({
        "background-image" : "none"
      });
      $("head").append('<style>#mastHead{margin-left: -10px !important;}</style>');
      $("head").append('<style>#mastHead.mastHeadFixed{margin: 0 auto !important;}</style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $("#mastHeadNew, #contentShell").css({
              "margin-left" : "0"
            });
            $("head").append('<style>#mastHead.mastHeadFixed{margin-left: 20px !important;}</style>');
        }
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $(document).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel + $('#mastHeadNew').outerHeight()){
        $("#mastHead").removeClass('mastHeadFixed');
        $("#mastHead_signin_search").removeClass('mastHead_signin_search_Fixed');
        $("#mastHeadSignin").removeClass('mastHeadSigninFixed');
        $("#fixedLogo").removeClass('fixedLogoActive');
        $("#contentShellInner").css({
          "padding" : "0"
        });
    }else{
        $("#mastHead").addClass('mastHeadFixed');
        $("#mastHead_signin_search").addClass('mastHead_signin_search_Fixed');
        $("#mastHeadSignin").addClass('mastHeadSigninFixed');
        $("#fixedLogo").addClass('fixedLogoActive');
        $("#contentShellInner").css({
          "padding" : "50px 0px 0px"
        });
    }
}
