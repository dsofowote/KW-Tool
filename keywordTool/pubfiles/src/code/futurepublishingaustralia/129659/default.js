integration.meta = {
    'sectionID' : '129659',
    'siteName' : 'PC Gamer - (Pagelead) - Smartphone - ( NZ )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086268',
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
        stylesCSS += '.inskinLoaded .mq-lg-off {margin-top: 200px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index" : "1000000"});
          $('.mq-lg-off').on('click', function() {
            $('.ism-anchor').toggleClass('opened');
            $('.mq-lg-off').toggleClass('opened2');
          });
          $('head').append('<style type="text/css">.opened {z-index : 0 !important;}</style>');
          $('head').append('<style type="text/css">.opened2 {margin-top: 0px !important}</style>');
    });

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});