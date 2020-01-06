integration.meta = {
    'sectionID' : '129470',
    'siteName' : 'CNBC APAC - (Publisher Booking Pagelead) - Smartphone - ( Asia AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			//Set code to check for a CSS class
			integration.custom.pl_behaviour = "class";
			//Select class to check CSS property of
			integration.custom.pl_class = ".branding-menu-brandingMenuSticky";
			integration.custom.headHeight = $('.branding-menu-brandingMenu').height() +$('.BreakingNews-container').height();
			//scroll states for the amount you want to push pagelead down by
			integration.custom.pl_initState = integration.custom.headHeight;
			//state 1 when class is present
			integration.custom.pl_scrollState1 = 0;
			// //state 2 when class isnt present
			integration.custom.pl_scrollState2 = integration.custom.headHeight;

        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
				var headHeight = $('.branding-menu-brandingMenu').height() +$('.BreakingNews-container').height() ;
				stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){ z-index: 10003 !important}';
				stylesCSS += '.inskinLoaded .GlobalNavigation-container{z-index: 10002 !important}';
				stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1), .ism-frame:nth-of-type(3){z-index: 10001 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
