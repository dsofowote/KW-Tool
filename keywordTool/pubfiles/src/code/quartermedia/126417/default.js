integration.meta = {
	'sectionID' : '126417',
	'siteName' : 'Gartenlexikon - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708059',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '[id^=div-gpt-ad-]',
	'plr_HideElementsByClass' : 'adsbygoogle',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 1170) / 2;
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$("#tbl-next-up").css({
			"right" : sideWidth + "px"
		});
		/*if (parseInt($("#qmdfp").css("height")) > 80) {
		 $("#qmdfp").css({
		 "margin-top" : "10px"
		 });
		 } */
		$("#qmdfp").css({
			"height" : "0px"
		});

	}
});

/**** Constrain Bottom Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	integration.custom.floatingButtons();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
	$(window).resize(function() {
		integration.custom.floatingButtons();
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("#relatedarticleflyoutbx").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#relatedarticleflyoutbx").css({
			"margin-bottom" : "0"
		});
	}
}

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	var sideWidth = (width - 1170) / 2;
	if (width < 1540 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
			$(".scroll-to-top").css({
				"right" : (sideWidth + 10) + "px"
			});
			$(".single-post .davenport-social-share-fixed").css({
				"margin-left" : "-250px"
			});
	} else {
		$(".scroll-to-top").css({
			"right" : "10px"
		});
		$(".single-post .davenport-social-share-fixed").css({
			"margin-left" : "0px"
		});
	}

}
