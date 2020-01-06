integration.meta = {
   'sectionID' : '128432',
   'siteName' : 'Vulcan Post - Desktop - ( MY SG )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1013250',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1120,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var headHeight = $("#masthead").height();
     if ($("#masthead").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#masthead");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }

    $("#inskinanchor").css({
    		"top" : headHeight,
    		"position" : "relative"
    	});
      $("#basement").css({
        "margin" : "0 auto",
        "width" : "1120px"
      });
      $("html").css({
        "overflow-x" : "hidden"
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
        var newheight = (integration.custom.PageSkinTopPanel + 20) - height;
        $("#readinglist").css({
            "margin-top" : newheight
        });
    }else{
        $("#readinglist").css({
            "margin-top" : "0px"
        });
    }
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\tgoogletag.pubads().definePassback('/39635364/Vulcanpost_Interstitials', [1, 1]).display();\n<\\script>";
};
