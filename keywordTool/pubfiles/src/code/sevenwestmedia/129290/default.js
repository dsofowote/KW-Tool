integration.meta = {
    'sectionID' : '129290',
    'siteName' : '7 News - (Pagelead) - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070869',
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
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 201 !important}';
        stylesCSS += '.inskinLoaded .css-13o7eu2{z-index: 0 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function() {
          try {
              integration.destroy();
          } catch (e) {
        }
      };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
		var headHeight = $('.css-nfhe9t').height();
   integration.base.setCfg({
			plr_PageHeightAdjustment : -100,
       });
   });

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
