integration.meta = {
    'sectionID' : '128778',
    'siteName' : 'Philstar - Smartphone - ( PH )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034603',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var wWidth = $(window).width();
        var cWidth = wWidth - integration.custom.PageSkinRightPanel;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #backtotop{right: ' + integration.custom.PageSkinRightPanel + 'px;}';
        stylesCSS += '.inskinLoaded .bite_entry, .inskinLoaded #section_checker{width:' + cWidth + 'px !important;}';
        stylesCSS += '.inskinLoaded #bites_arrow_left, .inskinLoaded #bites_arrow_right{top: 39% !important;}';
        stylesCSS += '.inskinLoaded .bite_entry{padding-left: 0px;}';
        stylesCSS += '.inskinLoaded #bite_entries{display: flex;}';
        stylesCSS += '.inskinLoaded .slider_title, .inskinLoaded .descOfSlider, .inskinLoaded .thoseShares{width: ' + (cWidth - 50) + 'px;}';
        stylesCSS += '.inskinLoaded #backtotop{z-index: 4;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on("adServed", function(e) {
    var headHeight = $("#header").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
