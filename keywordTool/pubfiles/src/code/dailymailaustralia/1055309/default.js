integration.meta = {
    'sectionID' : '129118',
    'siteName' : 'Mail Online Header Bidding - (Tablet) - Header bidding - ( AU )',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1055309',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 990,
    'srv_SectionID': '129118',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        tabletIntegration = function() {
			//integration.channelHome = ['/home/index.html', '/news/index.html', '/ushome/index.html', '/sport/index.html', '/tvshowbiz/index.html', '/auhome/index.html', '/femail/index.html', '/health/index.html', '/sciencetech/index.html', '/money/index.html', '/video/index.html', '/travel/index.html', '/mailonsunday/index.html', '/home/latest/index.html', '/home/you/index.html'];

			integration.base.setCfg({
				//'mf_siteId' : '681676',
				'plr_FastInit' : true,
				'plr_PageScanExclude' : ".beta, #infinite-list, #most-read-news-wrapper, #reader-comments, #taboola-below-main-column, #most-watched-videos-wrapper, #taboola-below-article-thumbnails-2nd, script",
				"plr_UseCreativeSettings" : true,
				"plr_UseFullVersion" : true,
				"plr_ContentType" : "PAGESKINEXPRESS",
				"plr_ContentW" : 1000,
				"plr_PageAlignment" : "center",
				"plr_HideElementsByID" : "",
				"plr_HideElementsByClass" : "channel_mpu_wrapper,adHolder,billboard",
				"plr_URLKeywords" : 2,
				"plr_BarneyThresholdClicks" : 1,
				"plr_BarneyThresholdRate" : 1
			});

			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
				$('#top').css('margin-left', '20px');
				integration.base.setCfg({
					plr_PageAlignment : 'left'
				});
				/* Required to over-ride important rule added by publisher */
				$('head').append('<style>body{margin-left:20px !important;}</style>');
			}

			$("body").css("overflow", "visible");
			/* CSS Changes requested by the publiser */
			var specialCSS = '<style type="text/css">.adHolder sticky_banner_overrides { height: 0; margin:0; }';
			specialCSS += '#stickyBanner { display:none; }';
			specialCSS += '#superBanner { display:none; }';
			specialCSS += '.banner-adverts { display:none; }';
			specialCSS += '.page-banner { padding-top: 0px !important; }';
			specialCSS += '</style>';
			$('head').append(specialCSS);
			/* End of CSS Changes requested by the publisher */

		}

        switch(e.data.device){
            case 'Tablet' :
                tabletIntegration();
                break;
        }
    }
});

