integration.meta = {
  'sectionID' : '128396',
  'siteName' : 'Computertotaal - Smartphone - ( DE )',
  'platform' : 'smartphone'
};

integration.testParams = {
  'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
  'mf_siteId' : '1008800',
  'plr_FluidAnchor': true,
  'plr_Fluid': true,
  'plr_Responsive' : true,
  'plr_ShowCloseButton' : true,
  'plr_ContentType': 'PAGESKINEXPRESS',
  'plr_UseFullVersion': true,
  'plr_UseCreativeSettings': true,
  'plr_HideElementsByID' : '',
  'plr_FastInit': true,
  'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
    var headHeight = $("#header > header.mobile").height();
    if ($("#header").length == 1) {
      $("<div id='inskinanchor'></div>").insertAfter("#header");
      integration.base.setCfg({
        plr_AnchorParent : "#inskinanchor",
        plr_PageHeightAdjustment : -headHeight
      });
    }

    $("#banner--0").css({
        "display" : "none"
    });

    $("#inskinanchor").css({
      "top" : headHeight,
      "position" : "relative"
    });

    $('body').addClass('inskinLoaded');
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded {}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
  }
});

integration.on('adClose', function(e) {
  $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- Passback Light AdSlot 1 for Ad Unit 'Computertotaal.nl_Retour_INSKIN' ### Size: [[300,50]] -->\n\n<div data-glade id='glade-aslot-1'\n\n      data-ad-unit-path='/116488029/Computertotaal.nl_Retour_INSKIN'\n\n      width='300' height='50'\n\n      data-click-url='%%CLICK_URL_UNESC%%'></div>\n\n<script async src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n\n<!-- End -->";
};
