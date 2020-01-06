integration.meta = {
   'sectionID' : '126455',
   'siteName' : ' Khaleej Times - Desktop - (UAE)',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707053',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1150,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) { 
	if (e.data.hasSkin) {
		$('head').append('<style>.cbp-spmenu-push-toright .stick_menu {left:190px !important;}</style>');
		$('head').append('<style>.menubg:not(.stick_menu) {left:0px !important;}</style>');
		$('head').append('<style>.cbp-spmenu-push:not(.cbp-spmenu-push-toright) .stick_menu {left:0px !important;}</style>');
		
		$('#fixed_width > div:nth-child(1)').css({
			'max-width' : '1150px', 
			'margin' : '0 auto'
		});
		
		$("#topBar, .logo_bg, .menubg, .footer_sec_1, .footer_sec_2").css({
			"max-width": "1150px",
			'margin': "0 auto",
			'left': "0",
			'right': "0"
		});
		
		$(".main_content_bg.photo_gallery_bg, .banner_ads_blackbg").css({
			"max-width": "1150px",
			'margin': "0 auto"
		});
		
		$(".menubg").css({
			'left': "0",
			'right': "0"
		}); 
		
	/*	
		$('.menu_close, #showLeftPush').click(function() {
			if($('body').hasClass('cbp-spmenu-push-toright')){
				console.log('menu is open');
				$('head').append('<style>.cbp-spmenu-push-toright .stick_menu {left:190px !important;}</style>');
			}else {
				console.log('menu is closed');
				$('head').append('<style>.cbp-spmenu-push-toright .stick_menu {left:0px !important;}</style>');
			}
			//console.log('menu clicks');
			
		});
	*/	
	}
});