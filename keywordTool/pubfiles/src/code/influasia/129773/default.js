integration.meta = {
    'sectionID' : '129773',
    'siteName' : 'Lobak Merah - Smartphone - ( BN ID MY SG )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088009',
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
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        var headHeight= $('.g1-header').height() + $('.g1-navbar').height() + $('#res-img').height();
        var headerWidth = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded #adAsia_anchor_top{display:none !important}';
        stylesCSS += '.inskinLoaded body{overflow:visible !important}';
        stylesCSS += '.inskinLoaded #res-img{width: auto !important; max-width: 375px}';
        stylesCSS += '.inskinLoaded .g1-header, .g1-navbar{width: '+ headerWidth +'px !important}';
        stylesCSS += '.inskinLoaded .g1-back-to-top{right: '+ integration.custom.FrameSideRight  +'px !important}';
        stylesCSS += '.inskinLoaded .the_champ_sharing_container{width: ' + contentWidth + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 1000 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($(".g1-navbar").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter(".g1-navbar");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_ScrollAdjustment : -headHeight,
                  plr_PageHeightAdjustment : -headHeight,
              });
          }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\nvar sublime = sublime || {};\nsublime.pixelImpression = '%%VIEW_URL_ESC%%';\nsublime.pixelClick = '%%CLICK_URL_ESC%%';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=24132\"><\\script>";
};