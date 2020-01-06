integration.meta = {
   'sectionID' : '128071',
   'siteName' : ' Ecowoman - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '973481',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1180,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_GetContentHeightVersion": 2
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {

     $("footer").css({
       "width": "1180px",
       "margin": "0 auto",
       "position": "absolute",
       "left": "0",
       "right": "0"
     });

     //integration._addPixel($('footer'));
   }
});


integration.on("layoutChange", function(e) {
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
    if ( docheight - integration.custom.PageSkinBottomPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
        $("footer").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("footer").css({
            "margin-bottom" : "0"
        });
    }
}
