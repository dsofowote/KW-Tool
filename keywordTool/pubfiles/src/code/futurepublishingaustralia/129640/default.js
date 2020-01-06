integration.meta = {
    'sectionID' : '129640',
    'siteName' : 'Live Science - Desktop - (SG)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1086250',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $(".primary-nav, #document-footer").css({"margin": "0 auto", "max-width": "970px"});
        var width = $(window).width();
        var sideWidth = (width - 1010)/2;
        $('head').append('<style type="text/css">#um_ultimedia_wrapper_iframeUltimedia {margin-right: '+ sideWidth +'px !important}</style>');
    }
});

integration.on("adServed", function(e) {
    $(".ism-anchor").css({"z-index" : "9999"});
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1230 || integration.custom.isSuper) {
        var sideWidth = (width - 970)/2;
        $('head').append('<style type="text/css">#um_ultimedia_wrapper_iframeUltimedia {margin-right: '+ sideWidth +'px !important}</style>');
    }
}