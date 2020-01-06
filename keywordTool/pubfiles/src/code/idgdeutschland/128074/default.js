integration.meta = {
   'sectionID' : '128074',
   'siteName' : 'Channel Partner - Desktop - ( DE )',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '973662',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1200,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_ScrollAdjustment' : -30
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     $("head").append("<style type='text/css'> body > div.container.idgContainerOuter > div {margin: 0 auto!important;}</style>");
     $("head").append("<style type='text/css'> body > #overscrolling > div.overscrolling-content.row > div.idgContainer.idgContainerBordered > header > header > div.row.idgHeaderTopRow.hidden-xs {margin-left: 15px!important;}</style>");

     integration._addPixel($('footer'));

     $(".idgPageHeader").css({
       "text-align" : "center!important"
     });

     $(".idgSky").css({
         "display" : "none"
     });
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    var stylesCSS = '<style id="inskinStyles" type="text/css">';
  	stylesCSS += '</style>'
  	$('head').append(stylesCSS);

    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    var headHeight = $("body > div.container.idgContainerOuter > div > header > nav.row.hidden-xs").height();
    if( height < integration.custom.PageSkinTopPanel + headHeight){
      var newStyles = ".idgHeaderTopRow{position: static!important;}";
    }else{
      var newStyles = ".idgContainerOuter > div > header > div.row.idgHeaderTopRow{position: fixed!important; top: 0!important; margin: 0 auto!important; left: 50%; transform: translateX(-50%); -webkit-transform: translateX(-50%);}";
      var newStyles = "#overscrolling{margin: 0!important;}";
    }

    document.getElementById("inskinStyles").innerHTML = newStyles
}
