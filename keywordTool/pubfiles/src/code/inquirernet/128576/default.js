integration.meta = {
    'sectionID' : '128576',
    'siteName' : 'Inquirer Ent -Smartphone- (PH)   (ID: 128575 )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1072208',
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
      if ($(".header2").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".header2");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor",
          plr_PageHeightAdjustment: -50,
        });
      } else
      if ($("#mobhead").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#mobhead");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor",
          plr_PageHeightAdjustment: -65,
        });
      }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-anchor {top: 50px; z-index: 9999}';
        stylesCSS += '.inskinLoaded .mnopen, .mob-menu-wrap {z-index: 100000}';
        stylesCSS += '.inskinLoaded #page .ism-frame:nth-of-type(1) {top: 65px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
