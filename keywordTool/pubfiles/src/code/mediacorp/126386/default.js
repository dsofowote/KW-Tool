integration.meta = {
	'sectionID' : '126386',
	'siteName' : 'Toggle - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '730470',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 0,
};

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1775) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1000) / 2;
		/* content width divided by 2 */
		$("#scroll-top-button").css({
			"right" : sideWidth + 10
		});
	} else {
		$("#scroll-top-button").css({
			"right" : "2%"
		});
	}
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerDiv = $('header.header.cf');
		$("body").prepend(headerDiv);
		
		var headerHeight = $('.header.cf').height();
		//$('html').addClass("in-skin");
		if ($(".header.cf").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header.cf");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -41
			});
		}
		$('.page-wrap, .nav--local').css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		var width = $(window).width();
		var sideWidth = (width - 1000) / 2;
		/* content width divided by 2 */
		$("#feedback-callout").css({
			"left" : sideWidth + 10
		});
		$('header.header.cf').css({
			"top" : "0",
			"margin" : "0 auto",
			"width" : "100%",
			"left" : "0",
			"right" : "0"
		});
		$('#feedback-callout, #scroll-top-button').css({
			"z-index" : "9"
		})

	}
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10"
	});
}); 