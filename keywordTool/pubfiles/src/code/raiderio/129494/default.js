integration.meta = {
    'sectionID' : '129494',
    'siteName' : 'Raider - Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1082487',
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
        stylesCSS += '.inskinLoaded #application {height: auto}';
        stylesCSS += '.inskinLoaded .slds-col {max-width: 100%}';
        stylesCSS += '.inskinLoaded .slds-table--cell-buffer tr>td:first-child {padding-left: 0.5rem}';
        stylesCSS += '.inskinLoaded .rio-pagination--button {margin-right: 0.5rem}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function() {
          try {
            integration.destroy();
          } catch (e) {}
        };
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
