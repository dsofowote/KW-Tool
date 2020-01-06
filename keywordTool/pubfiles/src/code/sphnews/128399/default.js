integration.meta = {
	'sectionID' : '128399',
	'siteName' : 'The Straits Times - Desktop - (SG) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008999',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headerHeight = $(".navbar-collapse.collapse").height();
     var width = $(window).width();
     var sideWidth = (width - 1200)/2;
     $(".back-to-top").css({
         "right" : sideWidth
     });
     $("head").append("<style>#navbar, .footer.container, .ads.leaderboard.lb-top, .st-bureaus-slideshow li span, #stfood-wine-banner:before {width:1200px !important; margin: 0 auto;}</style>");
     $("head").append("<style>#navbar {box-shadow:none !important; max-width:1200px !important;}</style>");
     $("head").append("<style>#avengers-checklist, #newsletter-banner, .ads-container, .fullwidth-banner, .askBanner-wrapper, #stfood-wine-banner {box-shadow:none !important;}</style>");
     $("head").append("<style>.st-bureaus-slideshow li span {left:0px !important; right:0px;}</style>");
     $("head").append("<style>.advanced-banner:before {margin-left:0px !important; margin-right:0px !important;}</style>");
     $("head").append("<style>.desktop-display header#navbar + div {padding-top:0px !important;}</style>");
     $("head").append("<style>.sbackground-multimedia {box-shadow:10px 0 0 #0C2B57, -10px 0 0 #0C2B57 !important;}</style>");
     $('.leaderboard ').css({'display':'none'});
     $(window).scroll(function() {
       var frtop = e.data.plr_FrameTop;
       var scroll = $(window).scrollTop();
       var hheight = $(".navbar-header").height();
       var scrollps = frtop + hheight;
       if (scroll < scrollps) {
         $("#ismStickyNav").html('.desktop-display header#navbar {position:relative !important;}');
       } else {
         $("#ismStickyNav").html('.desktop-display header#navbar {position:fixed !important;}');
       }
     });
     $("head").append("<style id='ismStickyNav'></style>");
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "1000001"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
  return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5908/AdX_Leaderboard_Desktop_Passback', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
};