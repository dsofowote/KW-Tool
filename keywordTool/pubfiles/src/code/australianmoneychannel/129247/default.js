integration.meta = {
    'sectionID' : '129247',
    'siteName' : 'Your Money - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1068789',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        $('.td-scroll-up, .mopinion-survey-content .btn-open-survey.tab').css({
          "right" : integration.custom.PageSkinRightPanel + 15
        });
        $('.td-scroll-up').css({
          "z-index" : "4"
        });

        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $('#td-outer-wrap').css({
              "width" : "1024px"
            });
            $("head").append("<style>.td-header-row.td-affix{margin-left: "+ integration.custom.PageSkinLeftPanel +"px !important;}</style>");
        }
    }
});
