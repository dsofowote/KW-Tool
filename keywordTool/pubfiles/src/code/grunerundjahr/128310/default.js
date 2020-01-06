integration.meta = {
	'sectionID' : '128310',
	'siteName' : 'Jolie - Desktop - ( AT CH DE )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1001837',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : 'BOfG0SiOfG0SiAKABBENBxoAAAAiCAKAAUABUADIAIAAZABEACPAE4ATwBLAEIA'
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$('.page').css({'overflow-x': 'unset'});

		integration.custom.FrameSideLeft = e.data.plr_FrameSide;
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
    }
});

integration.on("adServed", function(e) {
	var headHeight = $(".header").height();
      $(".ism-frame").parent().css({"top" : headHeight});
	integration.base.setCfg({
				plr_PageHeightAdjustment : -headHeight,
				plr_ScrollAdjustment: -headHeight
		})
});


// integration.on('adCallResult', function(e) {
// 	if (e.data.hasSkin) {
// 		var headHeight = $(".header").height();
// 		$("<div id='inskinanchor'></div>").insertAfter(".header");
// 		integration.base.setCfg({
// 			"plr_AnchorParent" : "#inskinanchor",
// 			"plr_StartScrollOnAnchor" : true,
// 			"plr_PageHeightAdjustment" : -headHeight - 20
// 		});

// 		$(".page").css({
// 			"overflow" : "visible"
// 		});
// 		$("#wrap").css({
// 			"left" : "0px"
// 		});
// 		$(".container").css({
// 			"padding" : "0 1.5rem"
// 		});
// 		$("footer").css({
// 			"margin" : "0 auto",
// 			"padding" : "20px 0px"
// 		});
// 		$(".main-footer").css({
// 			"max-width" : "1280px",
// 			"margin" : "0 auto"
// 		});

// 		$('.burger__trigger, *').click(function() {
// 			if ($('body').hasClass("body--burger-active")) {
// 				$("#wrap, .inskinanchor").css({
// 					"left" : "0px"
// 				});
// 			}
// 		});
// 		window.unloadPageskin = function() {
// 			try {
// 				integration.destroy();
// 			} catch (e) {
// 			}
// 		};
// 	}
// });

// integration.on("layoutChange", function(e) {
// 	var PageSkinLeftPanel = e.data.plr_FrameSide;
// 	$("head").append("<style>.cc_banner{left: " + PageSkinLeftPanel + "px !important; max-width: 1280px !important;}</style>");
// });

// integration.on('adServed', function(e) {
// 	setTimeout(function() {
// 		window.dispatchEvent(new Event('resize'));
// 	}, 250);
// });
