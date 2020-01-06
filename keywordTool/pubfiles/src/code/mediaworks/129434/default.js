integration.meta = {
    'sectionID' : '129434',
    'siteName' : 'The Rakyat Post - Smartphone - (MY)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077883',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
           if ($(".jeg_navbar_mobile_wrapper").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter(".jeg_navbar_mobile_wrapper");
        integration.base.setCfg({
          plr_AnchorParent: "#inskinanchor",
          plr_PageHeightAdjustment: -60,
          plr_ScrollAdjustment: -60
        });
      }
      $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .jeg_navbar_mobile_wrapper {width: calc(100% + 74px); margin-bottom: 0px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
   }
});

integration.on('adServed', function(e) {
	$(".ism-anchor").css({"z-index": "99"});
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
