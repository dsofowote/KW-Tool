integration.meta = {
    'sectionID' : '127269',
    'siteName' : 'Lifehacker - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706944',
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
        if ($(".site-header").length == 1) {
              $("<div id='inskinanchor'></div>").insertAfter(".site-header");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_PageHeightAdjustment : 78,
              });
          }
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #inskinanchor{padding-top: 62px;}';
        stylesCSS += '.inskinLoaded body > div.page-wrapper > div{display: block;}';
        stylesCSS += '.inskinLoaded .mobile-leaderboard{padding-top: 5px;}';
        stylesCSS += '.inskinLoaded .site-footer{margin-bottom: 50px;}';
        stylesCSS += '.inskinLoaded .page-wrapper .main, .inskinLoaded .sidebar .sidebar__content, .inskinLoaded .article-trending .trending-river .trending-river__post, .inskinLoaded .article-trending .trending-river .trending-river__post .trending-river__thumbnail, .inskinLoaded .article-trending .trending-river .trending-river__post .trending-river__content{float: none;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;

    $(".meta__social").css({
    	"width" : "calc(100% - " + integration.custom.PageSkinRightPanel + "px)"
    });

    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = integration.custom.PageSkinBottomPanel;
        $(".meta__social").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".meta__social").css({
            "margin-bottom" : "0"
        });
    }
}
