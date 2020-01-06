integration.meta = {
    'sectionID' : '129775',
    'siteName' : 'Noodou  - Smartphone - ( HK MY SG TW )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1088011',
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
      var headHeight = $("#header").height() + $("#res-img").height();
      var topHeight = $("#res-img").height();
      var width = $(window).width();
      var sideWidth = (width - 1200)/2;
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      var contentWidth = width - integration.custom.FrameSideRight;
      if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -topHeight
            });
        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded > p{position: relative; width: ' + width + 'px;}';
        stylesCSS += '.inskinLoaded #header > div.sticky-wrapper > div{width: ' + width + 'px !important;}';
        stylesCSS += '.inskinLoaded #header{width: ' + width + 'px !important;}';
        stylesCSS += '.inskinLoaded #go-top{right: ' + integration.custom.FrameSideRight + 'px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function (e) {
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded #header > div.sticky-wrapper > div{width: ' + width + 'px !important;}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\nvar sublime = sublime || {};\nsublime.pixelImpression = '%%VIEW_URL_ESC%%';\nsublime.pixelClick = '%%CLICK_URL_ESC%%';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=24132\"><\\script>";
};
