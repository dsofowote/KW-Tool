integration.meta = {
    'sectionID': '127645',
    'siteName': 'Everyday Health - Tablet - ( UK )',
    'platform': 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1035953',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1042,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $(".eh-footer, .container-fluid, .eh-container, .eh-footer__wrapper.clearfix, .eh-content-wrapper > .container, .eh-content-wrapper").css({
            "max-width": "1042px",
            "margin": "0 auto"
        });
    
    var headHeight = $(".eh-header").outerHeight();
    var windowWidth = $(document).width();
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.FrameTop = e.data.plr_FrameTop;
    var a = (integration.params.plr_ContentW - windowWidth) / 2;
    console.log(a);
    $("head").append('<style id="inskinStyles">.o2-in-side-view{right:' + a + 'px !important}</style>');

    $(document).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var topHeight = headHeight + integration.custom.FrameTop;
        var topPos = topHeight - scrollTop;
        if (scrollTop < topHeight){
            $(".o2-in-side-view").css({
                "top" : topPos
            });
        } else {
            //70 to prevent video player overlapping header
            $(".o2-in-side-view").css({
                "top" : headHeight
            });
        }
    });
    

    if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
        /* Pageskin Edge specific changes */
        integration.base.setCfg({
            'plr_PageAlignment': 'left'
        });
        
        $("#inskinStyles").html(".o2-in-side-view{right:300px !important}")

        $("#eh-responsive, .eh-footer, .container-fluid, .eh-container, .eh-footer__wrapper.clearfix, .eh-content-wrapper > .container, .eh-content-wrapper").css({
            "margin-left": "0px"
        });
    }
}
});

integration.on('adServed', function () {
    var headHeight = $(".eh-header").outerHeight();
    if ($("#homepage").length == 1) {
        $(".ism-frame").parent().css({
            "top": headHeight,
            "position": "relative",
            "z-index": "100092"
        });
    } else {
        $(".ism-frame").parent().css({
            "z-index": "100092"
        });
    }
});