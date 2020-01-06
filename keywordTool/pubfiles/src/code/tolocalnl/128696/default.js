integration.meta = {
    'sectionID' : '128696',
    'siteName' : ' Lokaalnieuwsnet - Desktop - (NL)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1030730',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1200,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var width = $(window).width();
      var sideWidth = (width - 1200)/2 + 15;
      $("head").append('<style>#onesignal-bell-launcher{left: ' + sideWidth + 'px !important;} </style>');
      $("head").append('<style>#fingerprint{right: ' + sideWidth + 'px !important;} </style>');
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
        $("#fingerprint, #onesignal-bell-launcher").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#fingerprint, #onesignal-bell-launcher").css({
            "margin-bottom" : "0"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://nl.ads.justpremium.com/adserve/js.php?zone=27830\"><\\script>";
};
