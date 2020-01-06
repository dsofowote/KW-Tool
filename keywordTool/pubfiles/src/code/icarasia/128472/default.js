integration.meta = {
	'sectionID' : '128472',
	'siteName' : 'One2Car - Desktop - ( TH )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1380]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1022288',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1120,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("nav.header").height();
		$("body").addClass("inskinLoaded");
		$(".inskinLoaded, .body__header--sticky-top .header, .editors-pick--sticky, .element-sticky-bottom").css({
			"max-width" : "1120px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		});
		if ($(".header").css("position") === "fixed") {
			$("main").css({
				"margin-top" : headerHeight
			})
		} else if ($(".header").css("position") === "relative") {
			$("main").css({
				"margin-top" : 0
			})
		}
		$("head").append("<style>.hero__ad-item{background-position: 58% 50% !important;}</style>");
		$("head").append("<style>body.inskinLoaded{padding-top: 0 !important;}</style>");
		$("head").append("<style> #sticky-slide-1:checked ~ .sticky-control-2, #sticky-slide-2:checked ~ .sticky-control-3, #featured-slide-1:checked ~ .slide-control-2{right: -20px !important;}</style>");
		$("head").append("<style> .editors-pick--pagination:hover #featured-slide-2:checked ~ .slide-control-1, .editors-pick--sticky:hover #sticky-slide-2:checked ~ .sticky-control-1, .editors-pick--sticky:hover #sticky-slide-3:checked ~ .sticky-control-2{left: -20px !important;}</style>")
	}
});

integration.on("adServed", function(e) {
	var myMarginRight = parseInt($("body").css("marginRight"));
	$("head").append("<style>.intercom-launcher-badge-frame, #intercom-container .intercom-notifications-frame, .intercom-borderless-frame, #intercom-container .intercom-messenger-frame, #intercom-container .intercom-launcher-frame, #intercom-container .intercom-launcher-discovery-frame{right: " + (myMarginRight + 10) + "px !important;} </style>");
	var myMarginLeft = parseInt($("body").css("marginLeft"));
	$("head").append("<style>.pw-cookie-window, .scroll-to-top__icon{left: " + (myMarginLeft + 10) + "px !important;}</style>");
	$(".ism-frame").parent().css({
		"z-index" : "9999"
	})
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav()
	})
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel && $(".header").css("position") === "fixed") {
		$(".js-header--sticky-top").css({
			top : integration.custom.PageSkinTopPanel
		})
	} else if (height > integration.custom.PageSkinTopPanel && $(".header").css("position") === "fixed") {
		$(".js-header--sticky-top").css({
			top : 0
		})
	}
};

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-1204518857076539\";\n/* Passback_Inskin_TH */\ngoogle_ad_slot = \"9430207720\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 250;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
