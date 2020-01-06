integration.meta = {
   'sectionID' : '124519',
   'siteName' : 'Amicella - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1350]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706244',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1030,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var width = $(window).width();
     var sideWidth = (width - 1030)/2 + 15;
	   $('.cc_banner-wrapper').css({
		  "height" : "0"
	   });
     $('.navbar-mainnavigation, .footer-section, #cmconsent-message, #c10675').css({
       "width" : "1000px",
       "margin" : "0 auto"
     });
     $('.scroll-top').css({
      "right" : sideWidth
     });
     $("head").append('<style>.navbar-mainnavigation .container{padding-right: 40px;}</style>');
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
        $(".scroll-top, #cmconsent-message").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".scroll-top, #cmconsent-message").css({
            "margin-bottom" : "0"
        });
    }
}
