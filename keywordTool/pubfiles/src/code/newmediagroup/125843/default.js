integration.meta = {
	'sectionID' : '125843',
	'siteName' : 'GOtrip',

	'platform' : 'desktop',
	'restrictions' : ''
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707534',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#body-maha, #main-nav-bar, .header-outer, .main-site-wrap").css({
			"max-width" : "1170px",
			"margin" : "0 auto"
		});
		$("#ruby-back-top").css({
			"z-index" : "1000480"
		});
		$("head").append("<style>#off-canvas-body{margin-top: 0px !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "2147483001"
	});
});

/**** Constrain Top Navigation within PageSkin ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$( document ).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	var topBarHeight = $("#top-bar-sticky").height();
	var logoHeight = $(".main-logo-ads-wrap").height();
	if( height < integration.custom.PageSkinTopPanel + topBarHeight + logoHeight){
		$("#main-nav-bar").css({
			"position" : "relative"
		});
	}else{
		$("#main-nav-bar").css({
			"position" : "fixed"
		});
	}
}

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1430 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1170)/2; /* content width divided by 2 */
        $("#onesignal-bell-launcher, #ruby-back-top").css({
			"right" : sideWidth,
        });
    } else {
        $("#onesignal-bell-launcher, #ruby-back-top").css({
			"right" : "0px",
        });
    }
}
