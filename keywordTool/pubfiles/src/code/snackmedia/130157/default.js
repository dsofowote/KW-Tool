integration.meta = {
    'sectionID' : '130157',
    'siteName' : 'VitalFootball - Smartphone - (UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1104998',
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
      var wwidth = $(window).width();
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var contentWidth = wwidth - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .main-navbar.stuck{width:' + (contentWidth - 20) + 'px!important;}';
        stylesCSS += '.inskinLoaded #sn_gg_ad_wrapper{display:none important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">ggv2id='cb46e8d9';<\\script><script type=\"text/javascript\" src=\"https://js.gumgum.com/services.js\"><\\script>";
};
