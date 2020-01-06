integration.meta = {
    'sectionID' : '129422',
    'siteName' : 'Baby Kingdom - Smartphone - (SG)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077014',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var sideWidth = $(window).width() - integration.custom.PageSkinRightPanel;
        stylesCSS += '.inskinLoaded .btm_ad{padding-bottom: 0}';
        stylesCSS += '.inskinLoaded .ad-placeholder{display: none}';
        stylesCSS += '.inskinLoaded .wrapper{max-width: 375px !important ; width: unset !important}';
        stylesCSS += '.inskinLoaded .left_social{max-width: ' + sideWidth + 'px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
  var headHeight = $('#header').height();
      $(".ism-anchor").css({"top" : headHeight});
			integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
				})
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
