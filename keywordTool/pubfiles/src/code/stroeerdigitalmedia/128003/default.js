integration.meta = {
   'sectionID' : '128003',
   'siteName' : 'Ganoma - Desktop - ( DE )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '965573',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1000,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {

     if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
       integration.custom.isSuper = true;
     }

     $("head").append("<style type='text/css'> .sitepos {padding-top: 0px!important;}</style>");

     window.unloadPageskin = function() {
        try {
            integration.destroy();
        } catch(e) {
        };
    };

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
    if (width < 1499 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1000)/2; /* content width divided by 2 */
        $(".scrollTop").css({
            "right" : sideWidth + 5
        });
    } else {
        $(".scrollTop").css({
            "right" : "10px"
        });
    }
}
