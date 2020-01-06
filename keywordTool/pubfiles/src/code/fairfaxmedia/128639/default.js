integration.meta = {
    'sectionID' : '128639',
    'siteName' : 'Essential Kids - Smartphone- (AU) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1028291',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        var wWidth = $(window).width();
        var cWidth = wWidth - integration.custom.FrameSideRight;
        var headHeight = $(".header-wrap .wrap").height();
        if ($("body > .header-wrap").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("body > .header-wrap");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .outer-wrap, .inskinLoaded .nav--secondary__wrap{max-width:' + cWidth + 'px;}';
        stylesCSS += '.inskinLoaded .nav--primary__wrap{margin-top:-' + integration.custom.PageSkinTopPanel + 'px;}';
        stylesCSS += '@media only screen and (max-width: 395px){.inskinLoaded .ad-wrap{margin-left: -10px;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
