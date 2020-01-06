integration.meta = {
    'sectionID' : '129715',
    'siteName' : 'Boerse Online - Smartphone - (DE) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086731',
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
        var headHeight = $(".nav-bg").height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var wWidth = $(window).width();
        var cWidth = wWidth - integration.custom.FrameSideRight - 60;
        if ($(".nav-bg").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".nav-bg");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        $("#inskinanchor").css({
        		"top" : headHeight,
        		"position" : "relative"
        	});
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .nav_mobile{z-index: 10;}';
        stylesCSS += '.inskinLoaded #highcharts-0{max-width:' + cWidth + 'px;}';
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
