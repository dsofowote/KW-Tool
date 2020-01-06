integration.meta = {
    'sectionID' : '129351',
    'siteName' : 'Pedestrian - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1073102',
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
        var windowWidth = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      	var contentWidth = windowWidth - integration.custom.FrameSideRight - 10;
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded html, body{overflow-x: visible !important}';
        stylesCSS += '.inskinLoaded .instagram-media{min-width:' + contentWidth + 'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    var headHeight = $('.navbar').outerHeight();
        $(".ism-anchor").css({"top" : headHeight});
        integration.base.setCfg({
          plr_PageHeightAdjustment : -headHeight
  			});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
