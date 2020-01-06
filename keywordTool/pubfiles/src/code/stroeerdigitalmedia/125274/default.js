integration.meta = {
    'sectionID' : '125274',
    'siteName' : 'Freenet - Tablet - (AT CH DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707359',
    "plr_ContentType" : "PAGESKINEXPRESS",
    "plr_PageAlignment" : "center",
    "plr_UseCreativeSettings" : true,
    "plr_ContentW" : 960,
    //"srv_Keywords" : "ISM_TEST",
    "plr_UseFullVersion" : true,
    "plr_EnableActiveResize" : false,
    "plr_HideElementsByID" : "",
    "plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('frnStickyNavi');
        $('body').addClass('frnStickyNaviShow');
        $("#frnMain, #frnKopfBlock").css({
            "margin" : "0 auto",
            "max-width" : "960px"
        });
        $("#frnBanner").css({
            "padding-top" : "0"
        });
        $("#frnKopfBlock").css({
            "left" : "0",
            "right" : "0"
        });
        $('#frnProductNavi').css({
            "right" : "-20px"
        });
        $('#frnKopf_Neu').css({
            "position" : "absolute",
            "width" : "100%"
        });
        $('#frnRahmenWrapper').css({
            'position' : 'relative',
            'margin-top' : '30px',
            'z-index' : '1001'
        });
        $('.frn_feedback_btn').hide();
        if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
            integration.base.setCfg({
                plr_PageAlignment : 'left'
            });
            $("#frnMain").css({
                "margin-left" : "0px"
            });
            $("#servicekatalog").attr('style', 'height: 670px !important');
        }
        $("body").css({
            "margin-right" : "0px"
        });
        integration._addPixel();
    }
});

integration.on("adServed", function(e) {
    $('.ism-frame').parent().css({
        "z-index" : "1001"
    });
});


integration.on('layoutChange', function(e) {
    integration.custom.ISMMenu();
    $(document).on("scroll", function(){
        integration.custom.ISMMenu();
        setTimeout(InSkinTopNav(), 100);
    });
});

integration.custom.ISMMenu = function() {
    var height = $("#frnKopf_Neu").height();
    $("#frnRahmen").css({
        "margin-top" : height
    });
}
