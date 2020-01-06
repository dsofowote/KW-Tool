integration.meta = {
    'sectionID' : '127471',
    'siteName' : 'Gartendialog - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '725470',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    "plr_StartScrollOnAnchor" : true,
    "plr_ScrollAdjustment" : 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -65
            });
        }
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .img-rounded{width: 100%; height: auto;}';
        stylesCSS += '.inskinLoaded #topposition{display: none;}';
        stylesCSS += '.inskinLoaded #footer-container{margin: 0 1%;}';
        stylesCSS += '.inskinLoaded .custom > img, .inskinLoaded .custom > a > img{max-width: 100%;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $("head").append("<style>.inskinLoaded #header{width: calc(100% + " + integration.custom.FrameSideRight + "px);}</style>");
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
}); 