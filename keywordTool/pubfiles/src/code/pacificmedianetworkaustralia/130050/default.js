integration.meta = {
    'sectionID' : '130050',
    'siteName' : 'Home Beautiful  - Tablet - ( AU )',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102105',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 992,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".Header.home, .Navbar--sticky, .Navbar, .Navbar-Container, .Footer, .BCF-Wrapper, .Hero-RecipeWrapper, .RelatedContent, .Article-Container").css({
        "width" : "992px",
        "margin" : "0 auto"
      });
      $(".Navbar-Logo-Link").css({
        "width" : "60px"
      });
      $("head").append("<style>.Navbar, .Hero-RecipeWrapper {width: 992px!important; margin: 0 auto!important;}</style>");
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
            $(".Header.home, .Navbar, .Navbar, .Navbar-Container, .Footer, .BCF-Wrapper, .Hero-RecipeWrapper, .RelatedContent, .Article-Container").css({
              "margin-left" : "0"
            });
            $("head").append("<style>.Navbar {margin-left: 0px!important;}</style>");
            $("head").append("<style>.Navbar--sticky, .Hero-RecipeWrapper {margin-left: " + integration.custom.PageSkinLeftPanel + "px!important;}</style>");
        }
    }
});


integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $(".Navbar--sticky").css({
            "margin-top" : newheight
        });
    }else{
        $(".Navbar--sticky").css({
            "margin-top" : "0px"
        });
    }
}
