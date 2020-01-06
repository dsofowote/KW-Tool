integration.meta = {
    'sectionID' : '129016',
    'siteName' : 'RugbyOnslaught- Smartphone - (INT) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045469',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".mobile-nav").outerHeight();
        if ($(".mobile-nav").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter(".mobile-nav");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_PageHeightAdjustment : -headHeight
              });
          }
        $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      	});
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded, .inskinLoaded #template {overflow: visible;}';
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

/* Passback Tag */
window.ISMPassback = function() {
    return "<script> (function (w, t, d, s) {\n\td = w.document;\n\tw.ggv2id = t;\n\ts = d.createElement('script');\n\ts.async = true;\n\ts.src = 'https://js.gumgum.com/services.js';\n\td.getElementsByTagName('head')[0].appendChild(s);\n}(top, '8f437fc5')); <\\script>";
};
