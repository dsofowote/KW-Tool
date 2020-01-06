integration.meta = {
   'sectionID' : '127476',
   'siteName' : 'The Asian Parent - Desktop - (ASIA)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '726472',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1030,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   var hHeight = $('.navbar').height();
	   $('body').css({
		  "margin-top" :  hHeight
	   });
     $('footer, div[class^="article-header"], div[class^="category-header"]').css({
       "width" : "1030px",
       "margin" : "0 auto"
     });
   }
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
    $("#onesignal-bell-launcher").css({
    "margin-bottom" : (footermargin + 15) + "px"
});
	} else {
    $("#onesignal-bell-launcher").css({
    "margin-bottom" : "0px"
    });
	}
}

integration.on("adServed", function(e) {
    var width = $(window).width();
    var sideWidth = (width - 1030)/2 + 10;
    $(".ism-frame").css({
        "max-width" : "unset"
    });
    $(".ism-frame").parent().css({
        "z-index" : "3"
    });
    $('#onesignal-bell-launcher').css({
     "right" : sideWidth
    });
});
