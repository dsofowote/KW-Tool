integration.meta = {
   'sectionID' : '128098',
   'siteName' : 'Channel 8 News - Smartphone - (SG)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '975647',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded body > div.wframe.nav-fixed.vidsm.bottom-fixed, .inskinLoaded .galleryPaging.pages{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px)!important;}';
      stylesCSS += '.inskinLoaded .paging.pages, .inskinLoaded .galleryPaging.pages{bottom: 0!important; z-index:100!important;}';

      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    var stylesCSS = '<style id="inskinStyles" type="text/css">';
    stylesCSS += '.inskinLoaded nav.back-top {width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px)!important;}';
    stylesCSS += '.inskinLoaded .paging.pages {width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px)!important;}';
    stylesCSS += '.inskinLoaded .inskinLoaded #smartbanner{margin-top: ' + integration.custom.PageSkinTopPanel + 'px !important;}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
});


integration.on("adServed", function(e) {
   $(".ism-frame").parent().css({
       "z-index" : "110"
   });
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
