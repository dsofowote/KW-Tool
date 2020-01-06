integration.meta = {
    'sectionID' : '128616',
    'siteName' : 'Tagsis - Desktop - (HK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027291',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var windowWidth = $(window).width();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(".container").width();
        var sides = (windowWidth - contentWidth) / 2;
        $("header#header").css({
            "max-width" : "1180px",
            "margin" : "0 auto"
        });

        $("#uni300").css({
            "left" : sides
        });
        
        $(".btn-push").css({
            "right" : sides
        });

        $("body").append("<style>#uni300 {left:" + sides + "px}header.fixed-top{left:0px;right:0px}</style>");
    }
});
