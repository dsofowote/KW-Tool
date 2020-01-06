integration.meta = {
    'sectionID' : '130113',
    'siteName' : 'Parismatch.com - Tablet - ( FR )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1104193',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1125,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -80,
                plr_PageHeightAdjustment : -150
			});
        }
        $("#header").css({"margin-bottom": "0px"});
        $(".sitefre").css({"display": "none"});
        $("#footer").css({"margin": "0 auto", "max-width": "1125px"});
        $("#social_sidebar").css({"top": "400px", "margin-left": "-75px"});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
            $('#main, #footer').css({'left' : -(integration.custom.FrameSideRight)/2});
            $('.affix-top').css({'margin-left':'-20px'});
        }
    }
});