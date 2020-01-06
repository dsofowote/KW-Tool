integration.meta = {
    'sectionID' : '129166',
    'siteName' : 'ESPN SG - (PageLead Only ) - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1061221',
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
      window.unloadPageskin = function() {
  			try {
  				integration.destroy();
  			} catch(e) {
  			};
  		}
  		var headHeight = $("#header-wrapper").height();
  		if ($("#header-wrapper").length == 1) {
  			$("<div id='inskinanchor'></div>").insertAfter("#header-wrapper");
  			integration.base.setCfg({
  				plr_AnchorParent : "#inskinanchor",
  				plr_PageHeightAdjustment : -headHeight
  			});
  		}
  		$("#inskinanchor").css({
  			"top" : headHeight,
  			"position" : "relative",
        // "z-index" : "9999999"
  		});


        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #pane-main {z-index: 0 !important}';
        stylesCSS += '.inskinLoaded #header-wrapper {z-index: 1000039 !important}';
        stylesCSS += '.inskinLoaded #inskinanchor {z-index: 1000040 !important}';
        // stylesCSS += '.inskinLoaded .menu-overlay-primary {z-index: 0 !!important}';
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
