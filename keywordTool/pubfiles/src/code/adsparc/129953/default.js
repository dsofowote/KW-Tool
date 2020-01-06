integration.meta = {
    'sectionID' : '129953',
    'siteName' : 'Zee5 - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

function setWindow() {
    return currentWindow.top;
  }

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098927',
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
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #header {width: calc(100% + 74px)}';
        stylesCSS += '.inskinLoaded .ism-anchor {z-index: 31}';
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

