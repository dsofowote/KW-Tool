integration.meta = {
    'sectionID' : '129200',
    'siteName' : 'What Culture - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1063459',
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

      //Set code to check for a CSS class
          integration.custom.pl_behaviour = "class";
          //Select class to check CSS property of
          integration.custom.pl_class = ".app-header__inner--sticky";

      	//scroll states for the amount you want to push pagelead down by
      	//state 1 when class is present
      	integration.custom.pl_scrollState1 = 48;
          //state 2 when class isnt present
      	integration.custom.pl_scrollState2 = 0;
        integration.custom.indicatorPos = 48;
        integration.custom.closePos = 48;


        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .post-tile__primary-tag {z-index : 1}';
        stylesCSS += '.inskinLoaded {padding-top : 0px !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
              integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	    $(".ism-frame").parent().css({"z-index" : "1000000"});

      $('.app-nav__item--button').on('click', function() {
        $('header').toggleClass('opened');
      });
      $('head').append('<style type="text/css">.opened {z-index : 1000001 !important;}</style>');

});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
});
