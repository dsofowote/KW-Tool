integration.meta = {
    'sectionID': '127686',
    'siteName': 'AAStocks - Smartphone - (HK)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '781435',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;    
    $(window).on('resize', function() {
        integration.custom.laychange();
    });
});

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('#Mobile_Home').hide();
        $('.footer').css({
            "height": "auto"
        });
        var wwidth = $(window).width();
        $('body').css({
            "width": wwidth
        });
    }
});

integration.custom.laychange = function() {
    var wwidth;
    var wheight = $(window).height();
    if (wwidth > wheight) {
    	wwidth = $(window).width()
        $('body').css({
            "width": wwidth
        });
        console.log("LANDSCAPE");
    } else {
    	wwidth = $(window).width()
        $('body').css({
            "width": wwidth
        });
        console.log("PORTRAIT");
    }
}