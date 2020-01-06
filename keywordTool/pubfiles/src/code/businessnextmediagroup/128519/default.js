integration.meta = {
    'sectionID' : '128519',
    'siteName' : 'Business Next Taiwan - Desktop - ( TW )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1026212',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
    if (e.data.hasSkin) {
      var headerHeight = $("#nav_block").outerHeight();
      if ($("#nav_block").length == 1) {
             $("<div id='inskinanchor'></div>").insertAfter("#nav_block");
             integration.base.setCfg({
                 plr_AnchorParent : "#inskinanchor",
                 plr_PageHeightAdjustment : -headerHeight,
                 plr_ScrollAdjustment : -34
             });
         }
       $(".main_block, footer").css({
         "max-width" : "1320px",
         "margin" : "0 auto"
       });
       $(".show .bnaa").css({
         "width" : "1320px"
       });
       $(".main_block").css({
         "margin-top" : "15px"
       });
       $("head").append("<style>.show .bnaa{width:1320px !important; }</style>");
    }
});
