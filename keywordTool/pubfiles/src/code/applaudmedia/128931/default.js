integration.meta = {
    'sectionID' : '128931',
    'siteName' : 'LoveFood - Tablet - (UK)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1042559',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinFrameSide = e.data.plr_FrameSide;
      $('.lm-header, .lm-header__cont').css({'max-width':'960px', "margin": '0  auto'});
      $("head").append('<style>.to-top{left: ' + (integration.custom.PageSkinFrameSide+10) + 'px !important;} </style>');
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            $('.wrapper, .lm-header').css({'left': '-150px'});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});
integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $(".to-top").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".to-top").css({
            "margin-bottom" : "20px"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://uk.ads.justpremium.com/adserve/js.php?zone=49363\"><\\script>";
};
