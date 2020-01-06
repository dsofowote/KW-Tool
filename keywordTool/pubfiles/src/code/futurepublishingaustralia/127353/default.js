integration.meta = {
    'sectionID' : '127353',
    'siteName' : 'T3 - Smartphone - (AU  SEA)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId' : '713136',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_PageHeightAdjustment' : -25
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .menuitems.container.full{top: initial; max-width: calc(100% - ' + integration.custom.FrameSideRight + 'px);}';
        stylesCSS += '.inskinLoaded [id*="div-sticky-ad-"]{height: 0px;}';
        stylesCSS += '.inskinLoaded .feature-block-item > figcaption{padding: 1px; overflow-wrap: break-word;}';
        stylesCSS += '.inskinLoaded .grey-box{width: 100%;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.frameRight = e.data.plr_FrameSideRight;
    integration.custom.frameTop = e.data.plr_FrameTop;
	$("head").append("<style>.inskinLoaded .button-search{right: " + integration.custom.frameRight + "px; top: " + integration.custom.frameTop +  "px;}</style>");
	$("head").append("<style>.inskinLoaded .search-box{width: calc(100% - " + integration.custom.frameRight + "px) !important; top: " + (integration.custom.frameTop + 60) + "px; left: 0px;}</style>");
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
