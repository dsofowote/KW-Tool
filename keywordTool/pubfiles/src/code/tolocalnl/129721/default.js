integration.meta = {
    'sectionID' : '129721',
    'siteName' : 'BDU Media - Smartphone - (NL) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086840',
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
        stylesCSS += '.inskinLoaded aside{min-width: 290px !important}';
        stylesCSS += '.inskinLoaded #ad_block{margin-left: -60px !important;}';
        stylesCSS += '.inskinLoaded #dfp-ad-lead-wrapper{margin-left: -15px !important;}';
        // stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded #google_image_div{width: 300px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
      $(".ism-frame").parent().css({
          "z-index": "31"
      });
  });

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "?<script type=\"text/javascript\" src=\"//nl.ads.justpremium.com/adserve/js.php?zone=54408\"><\\script>";
};
