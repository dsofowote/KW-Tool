integration.meta = {
    'sectionID' : '129119',
    'siteName' : 'Mail Online Header Bidding - (Smartphone) - Header bidding - ( AU )',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1055310',
    'srv_SectionID': '129119',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        smartphoneIntegration = function() {
			integration.base.setCfg({
				'plr_FastInit' : true,
				'plr_FluidAnchor' : true,
				'plr_AnchorParent' : ".scrollable-content",
				'plr_ScrollElement' : '.scrollable-content',
				'plr_HideElementsByID' : 'swipeIndicator',
				"plr_URLKeywords" : 2,
				"plr_StartScrollOnAnchor" : false,
				"plr_ScrollAdjustment" : 0,
				"plr_SwipeoutNavOffset" : 46,
				"plr_Responsive" : true,
				"plr_ShowCloseButton" : true,
				"plr_PageScanExclude" : "#next-stories, #p-most-read-news-mobile, #most-watched-videos-wrapper, #p-52,  #p-59,#infinite-list, #comments, #taboola-mobile-below-main-column, script"
			});
			
			integration.custom.FrameTop = 0;

			integration.custom.heightDetection = function() {
				var totalOuterHeight = 0;

				$(".scrollable-content > *").each(function() {
					if ($(this).prop('nodeName') != 'SCRIPT') {
						totalOuterHeight += $(this).outerHeight(true);
					} //calculates the height of all elements inside scrollable content element except the scripts
				});

				if ($('body').hasClass('isHidden') == false) {
					totalOuterHeight -= $('#mobile-content > header > nav').height();
				}//adjust the height when the sticky nav bar is not hidden

				integration.base.setCfg({
					'plr_ContentH' : totalOuterHeight - integration.custom.FrameTop + 40
				});
            }

			integration.custom.heightDetection();

			$("head").append("<style>html{padding: 0 !important;}</style>");
			$("body").addClass("inskinLoaded");
			var specialCSS = '<style type="text/css"> @media screen and (max-width: 432px) {';
			specialCSS += '.inskinLoaded .scrollable-content .sjs-share-container > .mobile-sharing-tools {height : 75px;}';
			specialCSS += '.inskinLoaded #stickyBanner {height : 0px}';
			specialCSS += '.inskinLoaded .social > ul {padding-left : 0}';
			specialCSS += '.inskinLoaded .social .comments-count {margin-right : 0}';
			specialCSS += '.inskinLoaded .social .email {padding-left : 0}';
			specialCSS += '.inskinLoaded #swipeIndicator.show{right: 74px;}';
			specialCSS += '.inskinLoaded {overflow-x:visible;}'
			specialCSS += '.inskinLoaded .social li{margin: 0 2px 0 0;}'
			specialCSS += '</style>';
			$('head').append(specialCSS);

			integration.custom.FrameTop = 0;
			integration.custom.heightDetection();

			integration.on('layoutChange', function(e) {
				integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
				integration.custom.FrameTop = e.data.plr_FrameTop;
				integration.custom.FrameBottom = e.data.plr_FrameBottom;

				$("body").addClass("inskinLoaded");
				var stylesCSS = '<style type="text/css">';
				stylesCSS += '.inskinLoaded #swipeIndicator.show{right: ' + integration.custom.FrameSideRight + 'px;}';
				stylesCSS += '.inskinLoaded #home > a.hp-swipe{right: ' + integration.custom.FrameSideRight + 'px;}';
				stylesCSS += '.inskinLoaded .scrollable-content{padding-right: ' + integration.custom.FrameSideRight + 'px;}';
				stylesCSS += '</style>'
				$('head').append(stylesCSS);

				integration.custom.heightDetection();

				setInterval(function() {
					integration.custom.heightDetection();
				}, 3000);

				$(window).resize(function() {
					integration.custom.heightDetection();
				});
			});

			integration.on("adClose", function(e) {
				$("body").removeClass("inskinLoaded");
				integration.telemetry.recordCustom("Ad Closed " + navigator.userAgent + " ");
			});

            
            if(e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
                integration.base.setCfg({'plr_FixedTop' : true,'plr_EnableSwipe' : true,});
            }
		}   

        switch(e.data.device){
            case 'Smartphone' :
                smartphoneIntegration();
                break;
        }
    }
});

