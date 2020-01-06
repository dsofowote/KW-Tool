integration.meta = {
    'sectionID' : '127145',
    'siteName' : 'Sayidaty - Smartphone - (MENA) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707210',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    "plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'body.inskinLoaded {overflow: visible;}';
        stylesCSS += '.inskinLoaded [id*="div - gpt - ad"], #block-views-mobile_view-block_3 > div > div > a > img{display: none;}';
        stylesCSS += '.inskinLoaded .socials-area{padding: 0;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.ismlaychange();
    $(".toggle-nav-panel.hamburger.hamburger--slider").on("click", function() {
        setTimeout(function() {
            integration.custom.ismlaychange();
        }, 50);
    });
});

integration.custom.ismlaychange = function() {
    var navRightMargin = (0 - $(".custom-fluid-width.custom-duration-400").width());
    $("head").append("<style>.inskinLoaded .custom-fluid-width.custom-duration-400{margin-right: " + navRightMargin + "px !important;}</style>");
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
