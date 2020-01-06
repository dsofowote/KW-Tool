integration.meta = {
    'sectionID' : '129087',
    'siteName' : 'Speld - Desktop - (NL)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1265]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1049327',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1005,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true,
    'plr_ForceFrameBottom': 0
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $(".header").outerHeight();
      var navHeight = $(".main-menu").height();
      if ($(".header").length == 1) {
                  $("<div id='inskinanchor'></div>").insertAfter(".header");
                  integration.base.setCfg({
                      plr_AnchorParent : "#inskinanchor",
                      plr_ScrollAdjustment : -35
                  });
              }
    }
});

integration.on("layoutChange", function(e) {
    $(".ism-anchor").css({"top": "65px"});
    integration.custom.floatingButtons();
    $( document ).scroll(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function(){
      $(".social-icons").css({"left": "0"});
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">\n  document.write('<scr' + 'ipt src=\"https://ad.360yield.com/default?li=306042&inskin=1&w=1800&h=1000&ic=' + (window.parent.tokuslid_ic_1800x1000 || '') + '&sb=' + (window.parent.tokuslid_sb_1800x1000 || '') + '&gd='  + (window.parent.tokuslid_gd_1800x1000 || '') +  '\">'  + '</scr' + 'ipt>');\n<\\script>";
};
