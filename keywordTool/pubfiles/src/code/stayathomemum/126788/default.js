integration.meta = {
   'sectionID' : '126788',
   'siteName' : 'Stay at Home Mum - Desktop - (AU)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707716',
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
     integration.base.setCfg({
         plr_ScrollAdjustment : -35
     });
   	$("body").css({
		   "background" : "none"
	   });
     $("#logoad").css({
      "display" : "none"
    });
    $("#navbar-fixed-top .second-bar").css({
     "box-shadow" : "none",
     "-webkit-box-shadow" : "none"
   });

   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
    var width = $(window).width();
    var sideWidth = ((width - 1170)/2) + 10;
    $('[aria-label="cookieconsent"]').css({
     "right" : sideWidth
   });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $('[aria-label="cookieconsent"]').css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $('[aria-label="cookieconsent"]').css({
            "margin-bottom" : "0"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/4843749/leaderboard', [[970, 90]]).display();\n<\\script>";
};
