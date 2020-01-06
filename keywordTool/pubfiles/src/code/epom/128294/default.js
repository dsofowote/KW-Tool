integration.meta = {
   'sectionID' : '128294',
   'siteName' : 'Wuxia World - Smartphone - ( INT )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '1000986',
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
     integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
     integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
     integration.custom.ww = $(window).width();
     var cwidth = integration.custom.ww - integration.custom.PageSkinRightPanel;
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded [aria-label="cookieconsent"]{width: ' + cwidth + 'px;}';
      stylesCSS += '.inskinLoaded .sub-menu{width: ' + cwidth + 'px; margin-top: ' + integration.custom.PageSkinTopPanel + 'px!important;}';
      stylesCSS += '@media only screen and (max-width: 390px){.inskinLoaded .entry-footer{max-width: 115px; font-size: 0.7rem;}}';
      stylesCSS += '@media only screen and (max-width: 390px){.inskinLoaded .entry-meta{font-size: 0.9rem;}}';
      stylesCSS += '@media only screen and (max-width: 390px){.inskinLoaded #site-navigation{font-size: 13px;}}';
      stylesCSS += '.inskinLoaded #wuxiaworld_ATF1, .inskinLoaded #wuxiaworld_BTF3, .inskinLoaded #wuxiaworld_BTF4, .inskinLoaded #wuxiaworld_BTF1, .inskinLoaded #wuxiaworld_BTF2{margin-left: 0px;}';
      stylesCSS += '.inskinLoaded #ai_widget-23, .inskinLoaded #ai_widget-28, .inskinLoaded #ai_widget-32, .inskinLoaded #ai_widget-26 {margin-left:0px!important; padding-left:0px!important;}';
      stylesCSS += '.inskinLoaded @media only screen and (max-width: 390px) {.NumberedPager>a, .inskinLoaded .NumberedPager>div, .inskinLoaded .NumberedPager>span, .inskinLoaded .pagination>li>a, .inskinLoaded .pagination>li>span {padding: 8px;}}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});


integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10000"
    });
});
