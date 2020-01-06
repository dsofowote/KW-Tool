integration.meta = {
    'sectionID' : '129120',
    'siteName' : 'Tribunnews - Desktop - ( ID )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1055497',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1150,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom': 0,
    "plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }
});

integration.on("adServed", function(e) {
  var headHeight = $(".thead").outerHeight();
  $(".ism-frame").parent().css({"top" : headHeight});
  $(".main").css({"padding-top" : headHeight});
});

integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
      var width = $(window).width();
      var sideWidth = (width - 1150)/2;
  if ($(".convertoFloatClassAnimate").length == 1) {
    $('head').append('<style type="text/css">#videoPlaylistPlugId, .ontop {right :'+ (sideWidth+20) +'px !important;}</style>');
  } else if ($(".convertoFloatClassAnimate").length == 0) {
      $('head').append('<style type="text/css">#videoPlaylistPlugId {right : 0 !important;}</style>');
      $('head').append('<style type="text/css">.ontop {right :'+ (sideWidth+20) +'px !important;}</style>');
    }
};

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width >1400 || integration.custom.isSuper) {
        var sideWidth = (width - 1150)/2;
        $('head').append('<style type="text/css">#videoPlaylistPlugId, .ontop {right :'+ (sideWidth+20) +'px !important;}</style>');
        $(".ontop").css({"z-index" : 99});
    }
}
