integration.meta = {
    'sectionID' : '130053',
    'siteName' : ' Better Homes & Gardens - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1532]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1102108',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1272,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $(".Header.home, .Navbar--sticky, .Navbar, .Navbar-Container, .Footer, .BCF-Wrapper, .Hero-RecipeWrapper, .RelatedContent, .Article-Container").css({
        "width" : "1272px",
        "margin" : "0 auto"
      });
      $("head").append("<style>.Navbar, .Hero-RecipeWrapper {width: 1272px!important; margin: 0 auto!important;}</style>");
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
