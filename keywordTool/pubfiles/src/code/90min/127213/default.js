integration.meta = {
	'sectionID' : '127213',
	'siteName' : '12 UP - Desktop - ( UK US )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '713805',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1312,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'ad',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
}
		$("head").append('<style>.ism-frame{z-index: 10 !important;}</style>');
		$("body > div.page-wrap > main, #site-footer").css({
			"padding-right" : "10px",
			"padding-left" : "10px"
		});
		$('.next-post-button__texts, .ad_1sv27e6').css({
			"display" : "none"
		});
		$("#site-footer").css({
			"max-width" : "1312px",
			"margin" : "0 auto"
		})
		$('.ad').first().css({
			"margin" : "50px auto 0",
			"width" : "1312px"
		});
		$('.next-post-button').hover(function() {
			$('.next-post-button__texts').css({
				"display" : "block"
			})
		}, function() {
			$('.next-post-button__texts').css({
				"display" : "none"
			});
		});
		
		$("div[data-slot-id='Top']").hide();
		var headerHeight = $("#site-header").height();
		$(".page-wrap").css({
			"margin-top" : headerHeight + 5
		});
	}
});

integration.on('adServed', function(){
	var headerHeight = $("header").height();
	$(".ism-anchor").css({
		"top" : headerHeight,
		"position" : "relative"
	})
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	var width = $(window).width();
	var sideWidth = (width - 984) / 2;
	$("head").append('<style>.next-post-button{right: ' + (sideWidth - 164) + 'px !important;}</style>');
	$("head").append('<style>#cnx-autoplay-container{right: ' + (sideWidth - 153) + 'px !important;}</style>');
	$("#site-header").css({
		"max-width" : "1312px"
	});
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#site-header").css({
			"margin-top" : newheight
		});
	} else {
		$("#site-header").css({
			"margin-top" : "0px"
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/175840252/12up.com/Passback/Desktop/970x250', [[970,250],[728,90],[970,90]])\n.setTargeting('Passback', ['InSkin'])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n<\\script>";
};