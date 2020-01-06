integration.meta = {
    'sectionID' : '128590',
    'siteName' : 'Freundin - Smartphone - (DE)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1024438',
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
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #modal-search {z-index: 10000;}';
        stylesCSS += '.inskinLoaded .sticky-wrapper {height: 50px!important;}';
        if ( $("#header").parents("#main").length < 1 ) {
          stylesCSS += '.inskinLoaded #menu-main-navigation {top: 0 !important; position: fixed; width: 100%; z-index: 9999;}';
        }
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on("adServed", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    if ( $("#header").parents("#main").length < 1 ) {
      var headHeight = $("#menu-main-navigation").outerHeight();
      $(".ism-frame").parent().css({
          "top" : headHeight
      })
    } else {
      $(".ism-frame").parent().css({
          "top" : "0px"
      })
    }
    integration.custom.InSkinScrollPanel();
    $( document ).scroll(function() {
        integration.custom.InSkinScrollPanel();
    });
});

integration.custom.InSkinScrollPanel = function() {
    var height = $(document).scrollTop();
    var headerHeight = $(".menu-main-navigation").outerHeight();
    if( height < ( integration.custom.PageSkinTopPanel + headerHeight) ){
        integration.base.setCfg({
            plr_ScrollAdjustment : 0
        });
    }else{
        integration.base.setCfg({
            plr_ScrollAdjustment : 50
        });
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
