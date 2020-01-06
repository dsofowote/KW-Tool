integration.meta = {
   'sectionID' : '124370',
   'siteName' : 'Goal.com - Desktop - (UK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1470]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706100',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1210,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
    var width = $(window).width();
    var sideWidth = (width - 1210)/2;
    var headHeight = $('.widget-header').height();
    if ($(".widget-header").length == 1) {
                $("<div id='inskinanchor'></div>").insertAfter("header");
                integration.base.setCfg({
                    plr_AnchorParent : "#inskinanchor",
                    plr_PageHeightAdjustment : -headHeight,
                    plr_ForceFrameBottom: 0
                });
            }
		$("footer").css({
			"max-width" : "1208px",
      "margin" : "0 auto"
		});
    $('.ad-leaderboard').css({'display':'none'});
    $('head').append('<style type="text/css">.news-card-video-player .picture > div > iframe {right:'+ (sideWidth + 20) +'px !important;}</style>');
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1470 || integration.custom.isSuper) {
        var sideWidth = (width - 1210)/2;
    $('head').append('<style type="text/css">.news-card-video-player .picture > div > iframe {right:'+ (sideWidth + 20) +'px !important;}</style>');
    }
}

// integration.on("adServed", function(e) {
// 	$('.ism-frame').parent().css({
// 		'z-index' : '10'
// 	});
// });

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"http://uk.ads.justpremium.com/adserve/js.php?zone=32275\"><\\script>";
};
