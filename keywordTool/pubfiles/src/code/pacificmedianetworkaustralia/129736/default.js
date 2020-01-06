integration.meta = {
    'sectionID' : '129736',
    'siteName' : 'Who - Desktop - (AU)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1532]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087168',
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
      $("head").append("<style>.Navbar--sticky, .BCF-Wrapper, .Header , .VideoWatch-Driver-Wrapper{width: 1272px !important; margin: 0 auto; left: 0 !important; right: 0 !important;}</style>");
      $('.Header.home, .Navbar--sticky, #leaderboard_sticky').css({
        "width" : "1272px",
        "margin" : "0 auto"
      });
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
            "position" : "relative"
        });
    }else{
        $(".Navbar--sticky").css({
            "position" : "fixed"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/60035833/PAC/WHO)', [[1,1]])\n  .setTargeting('passback', ['inskin'])\n  .setTargeting('position', ['2'])\n  .setTargeting('pagenumber', ['1'])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n  <\\script>";
};