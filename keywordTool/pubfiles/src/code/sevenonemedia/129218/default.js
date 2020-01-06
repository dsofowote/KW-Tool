integration.meta = {
    'sectionID' : '129218',
    'siteName' : 'Go Feminin - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1350]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1065335',
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
      $('footer').css({
  			"max-width" : "1030px",
  			"margin" : "0 auto"
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
        $("#header-content").css({
            "margin-top" : newheight
        });
    }else{
        $("#header-content").css({
            "margin-top" : "0px"
        });
    }
  }
