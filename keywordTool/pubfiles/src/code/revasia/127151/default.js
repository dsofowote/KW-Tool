integration.meta = {
	'sectionID' : '127151',
	'siteName' : 'RojakLah - Desktop - (Asia)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707590',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".container-fluid.nav-fixed").outerHeight();
		if ($(".container-fluid.nav-fixed").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".container-fluid.nav-fixed");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight,
			});
		}
		$("#inskinanchor").css({
			"margin-top" : headHeight
		});
		$("#mainContainer").css({
			"padding-top" : "15px"
		});
		$("#mainContainer").css({
			"margin-top" : "0"
		});
		$("#footer, #at-share-dock").css({
			"width" : "1050px",
			"margin" : "0 auto"
		});
		$("head").append("<style>#at4-share{top:22% !important;}</style>");
	}
});
integration.on("layoutChange", function(e){
	integration.custom.floatingButtons();
	$(window).resize(function(){
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1400) {
		var sideWidth = (width - 1050)/2;
		$("#at4-share").css({
			"left" : sideWidth
		});
	} else {
		$("#at4-share").css({
			"left" : "0px"
		});
	}
}
integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $("#at-share-dock").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#at-share-dock").css({
            "margin-bottom" : "0"
        });
    }
}
