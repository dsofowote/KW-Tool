integration.meta = {
   'sectionID' : '126854',
   'siteName' : 'Euronews - Smartphone - (INT)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '713702',
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
     var headHeight = $("#js-header").height();
     integration.custom.ww = $(window).width();
     integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
     integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
	   if ($("#js-header").length == 1) {
           $("<div id='inskinanchor'></div>").insertAfter("#js-header");
           integration.base.setCfg({
               plr_AnchorParent : "#inskinanchor",
               plr_PageHeightAdjustment : -headHeight
           });
       }
	   $("#inskinanchor").css({
		   "top" : headHeight,
       "position" : "relative"
	   });
     $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .mailmunch-scrollbox-iframe, .inskinLoaded #cookie_banner, .inskinLoaded #banners{width: ' + integration.custom.cw + 'px!important;}';
      stylesCSS += '.inskinLoaded #banners{box-shadow: -5px 0 10px #000!important;}';
      stylesCSS += '.inskinLoaded .enw-btn--back-to-top{right: 82px;}';
      if (integration.custom.ww < 400){
        stylesCSS += '.inskinLoaded .enw-MPU {margin-left: -15px!important;}';
      }
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "102"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div data-glade data-ad-unit-path=\"/6458/Passback_tag/Inskin\" height=\"250\" width=\"300\"></div>\n\n \n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};