integration.meta = {
   'sectionID' : '126385',
   'siteName' : 'Babynames - Smartphone - (UK)',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = { 
   'mf_siteId' : '706873',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      if ($("#page").length == 1) {
        $("#page").prepend("<div id='inskinanchor'></div>");
            integration.base.setCfg({
                "plr_AnchorParent" : "#inskinanchor",
                "plr_PageHeightAdjustment" : -70
            });
        }
      $('html').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += 'html.inskinLoaded {padding-right: 0 !important;}';
      stylesCSS += '.inskinLoaded body{padding-top: 14px !important; padding-bottom: 12px !important; overflow-y : hidden;}';
      stylesCSS +=  '.inskinLoaded div[id^="div-gpt-ad"]{display: none;}';
      stylesCSS +=  '.inskinLoaded img[src="http://load.s3.amazonaws.com/pixel.gif"]:first-of-type{display: none;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
   }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.FrameBottom = e.data.plr_FrameBottom;
    $("head").append("<style>.inskinLoaded #page{padding-left: 0 !important; padding-right: " + integration.custom.FrameSideRight + "px !important;}</style>");
    $("head").append("<style>.inskinLoaded body{padding-bottom: " + integration.custom.FrameBottom + "px;}</style>");
});

integration.on('adClose', function(e) {
      $('html').removeClass('inskinLoaded');
      $("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type='text/javascript' src='googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/66419034/Baby_Names_Wallpapers_1x1', [1, 1]).display(); <\\script>";
};