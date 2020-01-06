integration.meta = {
    'sectionID' : '129887',
    'siteName' : 'Discover Britain  - Smartphone - ( UK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1094970',
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
        if ($(".td-page-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".td-page-wrap");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -140,
                plr_PageHeightAdjustment : - 140
			});
		}
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #outer-wrap {overflow: visible}';
        stylesCSS += '.inskinLoaded #_hj-f5b2a1eb-9b07_feedback_minimized {bottom: 52px !important}';
        stylesCSS += '.inskinLoaded .td-scroll-up-visible {right: 75px !important}';
        stylesCSS += '.inskinLoaded .td-header-menu-wrap, .inskinLoaded .td-header-bg, .inskinLoaded .td-menu-placeholder {width: calc(100% + 74px)}';
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