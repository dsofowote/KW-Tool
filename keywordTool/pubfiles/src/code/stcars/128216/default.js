integration.meta = {
   'sectionID' : '128216',
   'siteName' : ' MyCarForum - Desktop - (SG)  ',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1278]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '993042',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1018,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var logoHeight = $("#logo_header").height();
     var menuHeight = $("#mcfmainmenu").height();
     var headHeight = logoHeight + menuHeight;
     if ($("#mcfmainmenu").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#mcfmainmenu");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
                plr_ScrollAdjustment : -headHeight
            });
        }

     if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
       integration.custom.isSuper = true;
     }
     $("#footer_utilities").css({
       "width" : "1018px",
       "margin" : "0 auto"
     });

     $("#BacktoTop, #back-top").css({
       "z-index" : "9998"
     });

   }
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "9999"
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 768 || integration.custom.isSuper) {
        var sideWidth = (width - 968)/2;
        $("#BacktoTop, #back-top").css({
            "right" : sideWidth + 20
        });
    } else {
        $("#BacktoTop, #back-top").css({
            "right" : "10px"
        });
    }
}
