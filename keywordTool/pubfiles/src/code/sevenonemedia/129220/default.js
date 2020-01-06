integration.meta = {
    'sectionID' : '129220',
    'siteName' : 'Go Feminin - Smartphone - (DE) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1065337',
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
      var contentWidth = $(window).width() - 74;
      var headHeight = $("#header").outerHeight();
      if ($("#header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          plr_PageHeightAdjustment : -headHeight
        });
      }
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow-x: visible}';
        stylesCSS += '.inskinLoaded #af-scrollspy {max-width: '+ contentWidth+ 'px}';
        stylesCSS += '.inskinLoaded #sticky-banner_atf {display: none}';
        stylesCSS += '.inskinLoaded #content {padding-top: 0}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	    $(".ism-frame").parent().css({"z-index" : "10005"});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
