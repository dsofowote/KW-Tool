integration.meta = {
    'sectionID' : '129854',
    'siteName' : 'IGN SEA - (Creative Appr.) - Desktop - ( ID MY PH SG TH VN )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1093620',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1230,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $("body").css({
          "padding-top" : "0px"
      });
      $("header").css({
          "width" : "1230px",
          "margin" : "0 auto",
          "left" : "0",
          "right" : "0"
      });
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("header, div.zad").css({
            "margin-top" : newheight
        });
    }else{
        $("header, div.zad").css({
            "margin-top" : "0px"
        });
    }
}
