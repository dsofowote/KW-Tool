integration.meta = {
    'sectionID' : '128480',
    'siteName' : 'NextMag Taiwan   - Desktop - ( TW )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1270]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1017388',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1010,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var wwidth = $(window).width();
     var sideWidth = ((wwidth - 1010) / 2) + 10;
     $(".header-wrap, .footer, .nav").css({
         "width" : "1010px",
         "margin" : "0 auto"
     });
     $("body").css({
         "background" : "#ecf0f1"
     });
     $("html").css({
         "overflow-x" : "hidden"
     });
     $(".goto-top, .share_icons").css({
         "right" : sideWidth
     });
   }
});
