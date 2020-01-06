integration.meta = {
    'sectionID' : '128960',
    'siteName' : 'Lianhe Zaobao - (PageLead) - Smartphone - ( SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1043560',
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

      var hHeight = $("#zaobao-brand").outerHeight();
              if ($("#zaobao-brand").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter("#zaobao-brand");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      'plr_PageHeightAdjustment' : -hHeight
                  });
              }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1), .inskinLoaded .ism-frame:nth-of-type(2) {z-index: 10001!important;} .inskinLoaded .navbar-default {z-index: 10002;} .inskinLoaded .ism-frame:nth-of-type(3) {z-index: 11!important;}';
        stylesCSS += '.inskinLoaded .avt-leaderboard {display: none}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Mobile_Passback', [[320, 50], [320, 100]]).display();\n<\\script>";
};