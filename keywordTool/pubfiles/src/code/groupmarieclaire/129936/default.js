integration.meta = {
    'sectionID' : '129936',
    'siteName' : 'Petit fute - Desktop - (FR) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098088',
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
      var headHeight = $("#header-site").outerHeight();
      if ($("#header-site").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header-site");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
    			integration.custom.isSuper = true;
    		}
        $("#inskinanchor").css({
        		"top" : headHeight,
        		"position" : "relative"
        });
        $('.home-top, #recherche_home, .footer-top, .section-concours, .section-store, .breadcrumb, #ancre-partir, #ancre-photo, .section-forum').css({
          "max-width" : "1000px",
          "margin" : "0 auto"
        });
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
    if (width < 1440 || integration.custom.isSuper) {
        var sideWidth = (width - 1000)/2;
        $(".icon-reseaux").css({
            "right" : sideWidth
        });
    } else {
        $(".icon-reseaux").css({
            "right" : "10px"
        });
    }
}
