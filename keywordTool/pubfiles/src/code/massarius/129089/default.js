integration.meta = {
    'sectionID' : '129089',
    'siteName' : 'Speld - Smartphone - ( NL )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1049439',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_FastInit' : true,
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var navHeight = $('#sticky-nav').outerHeight();
        stylesCSS += '.inskinLoaded #main{padding-top: 0px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".header").length == 1) {
          $("<div id='inskinanchor'></div>").insertAfter(".header");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment: - navHeight,
          });
        };
        $("#inskinanchor").css({
            "top" : navHeight,
            "position" : "relative"
          });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $('body').remove('#inskinanchor');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">document.write('<scr' + 'ipt src=\"https://ad.360yield.com/default?li=306150&inskin=1&&w=320&h=240&ic=' + (window.parent.tokuslid_ic_320x240 || '') + '&sb=' + (window.parent.tokuslid_sb_320x240 || '') + '&gd=' + (window.parent.tokuslid_gd_320x240 || '') + '\">' + '</scr' + 'ipt>');\n<\\script>";
};
