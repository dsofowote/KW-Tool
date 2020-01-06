integration.meta = {
    'sectionID' : '129291',
    'siteName' : 'Gumtree - (Pagescroll) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1070870',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ContentH' : 100,
    'plr_FrameTop' : 50,
    'plr_PageHeightAdjustment' : -300,
    'plr_FramePositionCSS' : 'margin:100px;',
    'srv_ResHeight' : 100
};

integration.on('adServed', function(e) {
    console.log("pagelead events 1");
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style id="inskinStyles" type="text/css">';
        //stylesCSS += '.inskinLoaded .sticky-header.sticky-header-mobile.responsive-mobile{z-index:1}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
});

integration.on('layoutChange', function(e) {
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

