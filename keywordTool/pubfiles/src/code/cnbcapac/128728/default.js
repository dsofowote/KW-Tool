integration.meta = {
    'sectionID' : '128728',
    'siteName' : 'CNBC  APAC - (PageLead Only) - Smartphone - ( Asia AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1032894',
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


// integration.meta = {
// 	'sectionID' : '128728',
// 	'siteName' : 'CNBC  APAC - Smartphone - ( ASIA AU )',
// 	'platform' : 'smartphone'
// };
//
// integration.testParams = {
// 	'mobile_resolution' : [0]
// };
//
// integration.flaggedTests = [];
//
// integration.params = {
// 	'mf_siteId' : '1032894',
// 	'plr_FluidAnchor' : true,
// 	'plr_Fluid' : true,
// 	'plr_Responsive' : true,
// 	'plr_ShowCloseButton' : true,
// 	'plr_ContentType' : 'PAGESKINEXPRESS',
// 	'plr_UseFullVersion' : true,
// 	'plr_UseCreativeSettings' : true,
// 	'plr_HideElementsByID' : '',
// 	'plr_HideElementsByClass' : '',
// 	'plr_FastInit': true
// };
//
// integration.on('adCallResult', function(e) {
// 	if (e.data.hasSkin) {
// 		integration.custom.FrameTop = e.data.plr_FrameTop;
// 		$('html').addClass('inskinLoaded');
// 		var stylesCSS = '<style type="text/css">';
// 		stylesCSS += '.inskinLoaded .branding-menu-brandingMenu, .inskinLoaded .SearchToggle-button, .inskinLoaded .BreakingNews-container{top: ' + integration.custom.FrameTop + 'px}';
// 		stylesCSS += '.inskinLoaded .branding-menu-brandingMenuSticky, .inskinLoaded .SearchToggle-buttonSticky, .inskinLoaded .AppCnbcPhoenix .BreakingNews-stickyContainer{top: 0px !important;}';
// 		stylesCSS += '.inskinLoaded .openNav .branding-menu-brandingMenu, .inskinLoaded .openNav .SearchToggle-button{top: 0px !important;}';
// 		stylesCSS += '.inskinLoaded, .inskinLoaded body{overflow: visible !important;}';
// 		stylesCSS += '.inskinLoaded .mobile-touch .Footer-container{margin-bottom: 0 !important;}';
// 		stylesCSS += '.inskinLoaded .openNav .inskinanchor, .inskinLoaded .openNavSearch .inskinanchor{z-index: 9 !important;}';
// 		stylesCSS += '</style>';
// 		$('head').append(stylesCSS);
// 	}
// });
//
// integration.on("adServed", function(e) {
// 	$(".ism-frame").parent().addClass("inskinanchor");
// 	$(".ism-frame").parent().css({
// 		"z-index" : "99999"
// 	});
// });
//
// integration.on('adClose', function(e) {
// 	$('html').removeClass('inskinLoaded');
// });
//
// integration.on('layoutChange', function(e) {
// 	if ($(window).scrollTop() > 0) {
// 		$('div.GlobalNavigation-globalNavigation').addClass('GlobalNavigation-globalNavigationSticky');
// 		$('div.branding-menu-brandingMenu').addClass('branding-menu-brandingMenuSticky');
// 		$('branding-menu-brandingMenu').addClass('SearchToggle-buttonSticky');
// 	} else {
// 		$('div.GlobalNavigation-globalNavigation').removeClass('GlobalNavigation-globalNavigationSticky');
// 		$('div.branding-menu-brandingMenu').removeClass('branding-menu-brandingMenuSticky');
// 		$('branding-menu-brandingMenu').removeClass('SearchToggle-buttonSticky');
// 	}
// });
