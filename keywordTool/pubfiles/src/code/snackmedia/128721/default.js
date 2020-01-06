integration.meta = {
    'sectionID': '128721',
    'siteName': 'Transfer Tavern - Smartphone - ( UK )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1032759',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit' : true
};


integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var windowWidth = $(window).width();
        var contentWidth = windowWidth - integration.custom.FrameSideRight;
        var headerHeight = $("#head-main-wrap").outerHeight();

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #head-main-wrap{min-width:' + windowWidth + 'px}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }

    $(".fly-but-wrap").click(function(){
        if ($(".fly-but-wrap.fly-open").length >= 1){
            console.log("menu open");
            integration.base.hideAd();
        } else {
            console.log("menu closed");
            integration.base.showAd();
        }
    });

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({
            'plr_FixedTop': true,
            'plr_EnableSwipe': true
        });
    }
});

integration.on('adServed', function (e) {
    $(".ism-frame").parent().css({
        "z-index": "100000",
        "position" : "relative"
    });
    var header = $("#head-main-wrap");
    $('body').prepend(header);
});

integration.on('adClose', function (e) {
    var header = $("#head-main-wrap");
    $('#site-wrap').prepend(header);
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s)\n{d=w.document;w.ggv2id=t;s=d.createElement('script');\ns.async=true;s.src='https://js.gumgum.com/services.js';\nd.getElementsByTagName('head')[0].appendChild(s);}\n(top,'6cdf4082'));<\\script>";
};
