integration.meta = {
    'sectionID' : '129095',
    'siteName' : 'SundayPost - Smartphone - (UK) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1055024',
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
      var сontentW = $(window).width() - 74;
      if ($("#sso-login-bar").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter("#sso-login-bar");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                  });
              }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .qc-cmp-persistent-link {right: 74px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3), .inskinLoaded .ism-frame:nth-of-type(2) {z-index: 999 !important}';
        stylesCSS += '.inskinLoaded .footer, .inskinLoaded .img-responsive {max-width: '+ сontentW +'px !important}';
        stylesCSS += '.inskinLoaded .title-holder > h2 {font-size: 41px !important}';
        stylesCSS += '.inskinLoaded .col-sm-6, .inskinLoaded .col-md-4, .inskinLoaded .col-md-8 {padding-left: 1px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $("#sso-login-bar").outerHeight();
	$(".ism-frame").parent().css({"top": headHeight});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight,
	});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});
