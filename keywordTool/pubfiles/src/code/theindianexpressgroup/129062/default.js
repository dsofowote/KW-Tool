integration.meta = {
    'sectionID' : '129062',
    'siteName' : 'The Financial Express - Smartphone - (IN) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1047221',
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
        var navHeight = $('.mainnav').height();
        var wWidth = $(window).width();
        var cWidth = wWidth - integration.custom.PageSkinRightPanel;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .topblockmain{width: ' + (cWidth - 40) + 'px!important;}';
        stylesCSS += '@media only screen and (max-width: 400px) {.inskinLoaded #gpt_ad_FE_ROS_RESP_FIRST, .inskinLoaded #gpt_ad_FE_ROS_RESP_SECOND, .inskinLoaded #gpt_ad_FE_ROS_RESP_THIRD, .inskinLoaded #gpt_ad_FE_ROS_RESP_FOURTH, .inskinLoaded #gpt_ad_FE_ROS_OOP_INNOV1, .inskinLoaded #gpt_ad_FE_ROS_MEDIANET_AP_ATF {margin-left: -20px !important;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".mainnav").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter(".mainnav");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_PageHeightAdjustment : -navHeight,
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
    $('html').removeClass('inskinLoaded');
    $('body').remove('#inskinanchor');
});
