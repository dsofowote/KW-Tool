integration.meta = {
    'sectionID' : '129431',
    'siteName' : 'NRL Australia - Smartphone - AU',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077451',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        stylesCSS += '.inskinLoaded html, body{overflow-x: visible}';
        stylesCSS += '.inskinLoaded .navigation{z-index: 4 !important}';
        stylesCSS += '.inskinLoaded .usabilla_live_button_container{left: 60% !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".navigation").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".navigation");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $('.navigation').height();
  $(".ism-anchor").css({"top" : headHeight});
    integration.base.setCfg({
          plr_PageHeightAdjustment : -headHeight
      })
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
