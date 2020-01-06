integration.meta = {
   'sectionID' : '128436',
   'siteName' : 'Headline Daily - Desktop - ( HK )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1504]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1013413',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1244,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $("head").append("<style>.header, .navbar, #footer, .header .searchbar.affix {width: 1244px!important; margin: 0 auto!important;}</style>");
     $("html").css({
       "overflow-x" : "hidden"
     });
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    var stylesCSS = '<style id="inskinStyles" type="text/css">';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    var footerHeight = $("#footer").height();
    var searchBarHeight = $(".search-blog.affix-bottom").height();
    if ( docheight - integration.custom.PageSkinTopPanel + searchBarHeight - footerHeight < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel) - docheight;
        var newStyles = ".main-blogs .sections-label .search-blog.affix-bottom {position:relative !important; top: 0px!important;";
    } else if ( docheight - integration.custom.PageSkinTopPanel + searchBarHeight - footerHeight > winheight + scrolltop ) {
      var newStyles = ".main-blogs .sections-label .search-blog.affix-bottom {position:fixed !important;";
    }
    document.getElementById("inskinStyles").innerHTML = newStyles
}
