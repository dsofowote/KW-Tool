integration.meta = {
	'sectionID': '128528',
	'siteName': 'Mail Online - (Pagelead) - Smartphone - (AU) ',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1020903',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_FixedTop': true,
	'plr_EnableSwipe': true,
	'plr_AnchorParent': '.scrollable-content',
	'plr_ScrollElement': '.scrollable-content',
	"plr_SwipeoutNavOffset": 0,
	"plr_ForceFrameBottom" : false,
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		$("head").append("<style>html{padding: 0 !important;}</style>");
		$("body").addClass("inskinLoaded");
		var specialCSS = '<style type="text/css"> @media screen and (max-width: 432px) {';
		specialCSS += '.inskinLoaded #swipeIndicator.show{right: 74px;}';
		specialCSS += '.inskinLoaded {overflow-x:visible;}';
		specialCSS += '.inskinLoaded #infinite-list {z-index:998}';
		specialCSS += '.inskinLoaded .scrollable-content, .inskinLoaded #mobile-content{z-index:initial}';
		specialCSS += '.ism-frame:nth-of-type(1){z-index:999}';
		specialCSS += '</style>';
		$('head').append(specialCSS);

		integration.custom.FrameTop = 0;
		integration.custom.heightDetection();

		if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
			integration.base.setCfg({'plr_FixedTop' : false, 'plr_EnableSwipe' : true});
		}
	}
});

integration.on('layoutChange', function (e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	var headHeight = $("header").outerHeight();

	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #swipeIndicator.show{right: ' + integration.custom.FrameSideRight + 'px;}';
	stylesCSS += '.inskinLoaded #home > a.hp-swipe{top:90%}';
	//stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.heightDetection();

	setInterval(function () {
		integration.custom.heightDetection();
	}, 3000);

	$(window).resize(function () {
		integration.custom.heightDetection();
	});

	var plFixed = true;
    var headHeight = $("header.cc").outerHeight();
    var newValue = "";
    
    var stylesCSS = '<style id="inskinPL" type="text/css">';
    if ($("isHidden").length >= 1) {
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + headHeight + 'px !important;}';                   
    } else {
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';   
    }
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    var stylesCSS = '<style id="inskinPL" type="text/css">';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    //If based on class
    $(document).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
            if ($(".isHidden").length >= 1 && plFixed) {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';                   
                $("#inskinPL").html(newValue);
            } else {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + -headHeight + 'px !important;}';   
                $("#inskinPL").html(newValue);
            }
    });

    setTimeout(function () {
        plFixed = false;
        newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
        $("#inskinPL").html(newValue);
    }, 6000);
});

integration.on("adServed", function (e) {
	// Fixing the header when Pagelead is fixed
	var stylesCSS = '<style id="inskinScroll" type="text/css">';	
	stylesCSS += '</style>';
	$('body').append(stylesCSS);

	$(".ism-indicator").css({
		"top" : "75%",
		"z-index" : "999"
	});

	$("").css({
		"" : "999"
	});

	var pageleadFixed = true;
	var newValue;
	setTimeout(function () {
		pageleadFixed = false
		$("#inskinScroll").remove();
	}, 5000);

	if (pageleadFixed == true) {
		$(".scrollable-content").scroll(function () {
			if ($("body.isHidden").length == 1) {
				//newValue = "header.mobile-sharing{position:fixed !important;}";
				newValue = ".inskinLoaded header.mobile-sharing{position:fixed !important; transform:translate3d(0,0,0)!important;}";
				$("#inskinScroll").html(newValue);
			}
		});
	}
});

integration.on("adClose", function (e) {
	$("body").removeClass("inskinLoaded");
	integration.telemetry.recordCustom("Ad Closed " + navigator.userAgent + " ");
});

integration.custom.heightDetection = function () {
	var totalOuterHeight = 0;

	$(".scrollable-content > *").each(function () {
		if ($(this).prop('nodeName') != 'SCRIPT') {
			totalOuterHeight += $(this).outerHeight(true);
		} //calculates the height of all elements inside scrollable content element except the scripts
	});

	if ($('body').hasClass('isHidden') == false) {
		totalOuterHeight -= $('#mobile-content > header > nav').height();
	} //adjust the height when the sticky nav bar is not hidden

	integration.base.setCfg({
		'plr_ContentH': totalOuterHeight - integration.custom.FrameTop + 40
	});
}
/* Passback Tag */
window.ISMPassback = function () {
	if (!integration._userConsent()) {
		return '';
	}
	return "<SCRIPT SRC=\"http://ib.adnxs.com/ttj?id=5620317&cb=%%CACHEBUSTER%%&pubclickenc=%%CLICK_URL_ESC%%\" TYPE=\"text/javascript\"><\\script>";
};