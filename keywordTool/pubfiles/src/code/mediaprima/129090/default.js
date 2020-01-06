integration.meta = {
    'sectionID' : '129090',
    'siteName' : 'Berita Harian - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1049892',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('#footer, #top-bar').css({'max-width':'1170px', 'margin': '0 auto', 'width':'1170px !important'});
      $('body').append('<style>.sticky-navbar{max-width: 1170px !important; margin:0 auto !important; right:0}</style>');
      $('#vodus3PCookie').css({'display': 'none'});
      $("head").append("<style> #block-bh-googledfp-billboard {display: none !important;}</style>");
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.InSkinBottomNav();
        $( document ).scroll(function() {
            integration.custom.InSkinBottomNav();
        });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1917 || integration.custom.isSuper) {
        var sideWidth = (width - 1170)/2;
        $(".ins-backtotop").css({
            "right" : sideWidth + "px"
        });
        $(" .sp-fancybox-skin").css({
            "left" : sideWidth + "px"
        });
    } else {
        $(".ins-backtotop").css({
            "right" : sideWidth + "px"
        });
        $(".sp-fancybox-skin").css({
            "left" : sideWidth + "px"
        });
    }
}


integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    var navbarHeight = $('#navbar').height();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight - navbarHeight + 10;
        $("body").append("<style> .ins-backtotop{bottom: " + footermargin + "px !important}</style>");
        $("body").append("<style> .sp-fancybox-skin{bottom: " + footermargin + "px !important}</style>");
    } else {
        $("body").append("<style> .ins-backtotop{bottom: 10px !important}</style>");
        $("body").append("<style> .sp-fancybox-skin{bottom: 10px !important}</style>");
    }
}

integration.on("adServed", function(e) {
		  var navHeight = $('.sticky-navbar').height();
     integration.base.setCfg({
			  plr_PageHeightAdjustment : -navHeight,
		      });
		 });
