integration.meta = {
	'sectionID' : '127537',
	'siteName' : 'Androidauthority - desktop - US',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '735003',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1460 || integration.custom.isSuperWide) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1000) / 2;
		/* content width divided by 2 */
		$("#back-to-top").css({
			"right" : sideWidth + 25
		});
	} else {
		$("#back-to-top").css({
			"right" : "25px"
		});
	}

}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight1 = $('#sticky-inner').outerHeight();
		var hHeight2 = $('#tt_hot_products_menu').outerHeight();
		var hHeight3 = hHeight1 + hHeight2;
		$('body').css({
			"margin-top" : hHeight3
		});
		
		$(".after-header").css({
			"margin-top" : "0px"
		});
		
		$(".header-top, #dsk-banner-ad-a").css({
			"height" : "0px"
		});
		
		$('#footer').css({
			"max-width" : "1220px",
			"margin" : "0 auto"
		});
		$("#sticky-bar").css({
			"z-index" : "5000008"
		});
		var docScroll;
		$(function() {
			//Keep track of last scroll
			var lastScroll = 0;
			$(window).scroll(function(event) {
				docScroll = $(window).scrollTop();
				//Sets the current scroll position
				var st = $(this).scrollTop();
				//Determines up-or-down scrolling
				if (docScroll >= 1270) {
					if (st > lastScroll) {
						//Replace this with your function call for downward-scrolling
						integration.base.setCfg({
							"plr_StartScrollOnAnchor" : true,
							"plr_ScrollAdjustment" : -hHeight3
						});
					} else {
						//Replace this with your function call for upward-scrolling
						integration.base.setCfg({
							"plr_StartScrollOnAnchor" : true,
							"plr_ScrollAdjustment" : 0,
						});
					}
					//Updates scroll position
					lastScroll = st;

				} else {
					integration.base.setCfg({
						"plr_StartScrollOnAnchor" : true,
						"plr_ScrollAdjustment" : 0,
					});
				}
			});
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "5000007"
	});
});
