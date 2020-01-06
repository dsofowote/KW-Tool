integration.meta = {
   'sectionID' : '129182',
   'siteName' : 'Hawaaworld - Desktop - (MENA)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1061992',
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
     $("footer, #breadcrumb, .container-fluid .row").css({
         "max-width" : "1200px",
         "margin" : "0 auto",
         "left" :"0",
         "right" :"0"
     });
     window.unloadPageskin = function() {
                 try {
                     integration.destroy();
                 } catch (e) {
                 }
             };
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
   if (width >1460 || integration.custom.isSuper) {
       var sideWidth = (width - 1200)/2;
       $(".container-fluid > a, #backToTop").css({
           "left" : sideWidth +10,
       });
       $("#backToTop").css({
             "bottom": "174px"
         });
   }
}

integration.on("adServed", function(e) {
    var navHeight = $('.navbar').height();
    $(".ism-frame").parent().css({
        "top" : navHeight
    });
    
    integration.base.setCfg({
        plr_PageHeightAdjustment : -navHeight,
    });
});
