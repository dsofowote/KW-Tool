integration.meta = {
    'sectionID' : '128756',
    'siteName' : 'NBL - Smartphone- (AU)  ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1034052',
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
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var navWidth = $(window).width() - integration.custom.PageSkinRightPanel;
        stylesCSS += '.inskinLoaded {overflow-x: visible !important}';
        stylesCSS += '.inskinLoaded .navbar {max-width: '+ navWidth +'px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("#tophdr").length == 1) {
              $("<div id='inskinanchor'></div>").insertBefore("#google-ad-container"); /* use .main-content if no .google-ad-container*/
                   integration.base.setCfg({
                  'plr_AnchorParent' : "#inskinanchor",
                  'plr_ScrollAdjustment' : - $(".row-xs-12").height(),
                  'plr_PageHeightAdjustment' : -footermargin,
                  'plr_EnableActiveResize' : false
             });
          }
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/21631485662/nbl.home', [1, 1]).display();\n<\\script>";
};