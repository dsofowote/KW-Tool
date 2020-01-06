integration.meta = {
    'sectionID' : '128909',
    'siteName' : 'What\'s on Dubai - (Publisher Booking) - Desktop - ( AE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1440]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1041044',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1180,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -61
			});
		}
		/* Overiding style statements into head */
		$("head").append("<style>#wrapper{padding-top: 0px !important}</style>");
		$("head").append("<style>.at4-recommended-outer-container{background : #efefef ; margin: 0 auto; max-width: 963px;}</style>");
		$("#footer").css({
			"max-width" : "963px",
			"margin" : "0 auto"
		});
		$(".sponsorship.spons-home, #div-gpt-ad-1491290502916-1").css({
			"height" : "0px",
			"margin" : "0px"
		})
		$("body").css({
			"background" : "none"
		});
		$(".footer-holder, section.description").css({
			"padding-left" : "10px"
		});
		$("#wrapper").css({
			"overflow" : "visible"
		});
		$(".page-heading > h1").css({
			"padding-left" : "10px"
		});
		/* Detecting window width and cotent width */
		var wwidth = $(window).width();
		var cwidth = (wwidth - 983) / 2;
		/* var rowcss = "<style>#at4-whatsnext, #at4-wnoc{right:";
		 rowcss += cwidth;
		 rowcss += "px !important}</style>"; */
		$("head").append(rowcss);
	}
});

integration.on('adServed', function(e) {
	var headerHeight = $("#header").outerHeight();
	$("#inskinanchor").css({
		"z-index" : "100",
		"margin-top" : headerHeight
	});
	$("#at4-whatsnext").css({
		"z-index" : "2"
	});
	$("#at4-wnoc").css({
		"z-index" : "inherit"
	});
});

/* On scroll changing the position of an advert */

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	integration.custom.InSkinRightNav();
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
	$(window).on("resize", function() {
		integration.custom.InSkinRightNav();
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("#at4-whatsnext, #at4-wnoc").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#at4-whatsnext, #at4-wnoc").css({
			"margin-bottom" : "0"
		});
	}
}

integration.custom.InSkinRightNav = function() {
	var winwidth = $(window).width();
	var outer = (winwidth - 983) / 2;
	$("#at4-whatsnext, #at4-wnoc").css({
		"margin-right" : outer
	});
}
