integration.meta = {
    'sectionID' : '127387',
    'siteName' : 'Famili - Desktop - FR',
    'platform' : 'desktop'
};




integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '729034',
    'plr_PageAlignment' : 'center',
    'plr_ContentW' : 1020,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $("#beforeHeader, #header, #barreservice, #zoneBottom").css({
            "width" : "1020px",
            "margin" : "0 auto"
        });
        
        $("#socialbanner").css({
            "width" : "1020px",
            "margin" : "0 auto",
            "right" : "0px"
        });
        
        $("#barreservice").css({
            "padding-left" : "0px",
            "padding-right" : "0px",
            "right" : "0px"
        });
        
        /* fixing the 1px wide leaderboard */
        $("#beforeHeader > div").css({
            "width" : "728px"
        });
        
        $("#popinfacebook").hide();

        $("#beforeHeader > div").css({
            "padding-top" : "10px"
        });

    }
});
integration.on("layoutChange", function(e) {
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $(document).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if (docheight - integration.custom.PageSkinBottomPanel < winheight + scrolltop) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $("#barreservice").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#barreservice").css({
            "margin-bottom" : "0"
        });
    }

}
/* Passback Tag */
window.ISMPassback = function() {
    return "";
};