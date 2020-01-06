integration.meta = {
    'sectionID' : '128679',
    'siteName' : 'Berlingske - Desktop - (DK)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1029513',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1260,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_SideScroll': false,
    'plr_ForceFrameBottom': 0

};

//CUSTOM INTEGRATION REQUESTED BY PUBLISHER - PLEASE DO NOT REMOVE - PLEASE TALK TO DAN OR RICH BEFORE EDITING
integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        if ($("header.site-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("header.site-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -100
            });
        }

        $(".main-wrapper").css({
            "overflow": "visible"
        });


      $(".site-footer").css({"margin": "0 auto", "max-width": "1260px"})
    }
});


integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	if ($(document).height() < 1440) {
	} else {
		var contentH = 1440 - integration.custom.FrameTop;
		integration.base.setCfg({
			'plr_ContentH' : contentH
		});
    }
    
    var stylesCSS = '<style id="inskinPL" type="text/css">';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    // Sets skyscraper to sit below our skin at all times
    var newValue;
    var plFixed = true;
    var headHeight = $(".nav-mobile").outerHeight();

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var skyTop = 1300 - scrollTop;
        var headHeight = $(".site-header").outerHeight();
        var a = contentH + integration.custom.FrameTop + headHeight;
        if (scrollTop < a) {
            newValue = '#right_sticky, #left_sticky{top:-240px !important;}';
            $("#inskinPL").html(newValue);
        } else {
            newValue = '.right_sticky, .left_sticky{}';
            $("#inskinPL").html(newValue);
        }
	});
});