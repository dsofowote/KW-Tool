integration.meta = {
	'sectionID' : '126657',
	'siteName' : 'Mumsnet - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708123',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.ProductType = e.data.format;
		var width = $(window).width();
		var sideWidth = (width - 1000)/2;
		$('#Root').css({
			"margin-top" : "0",
			"margin-bottom" : "-20px"
		});
		$('.main-menu__menu').css({
			"margin" : "0"
		});
		$('.header__interactions').css({
			"margin-top" : "0"
		});
		$('.bcup .reskin-wrapper, .bcup .ad-fixed-banner-md .ad-leaderboard, .bcup .ad-fixed-banner-lg .ad-leaderboard').css({
			"position" : "relative"
		});
		$('.bcup .ad-fixed-banner-md .ad-leaderboard').css({
			"top" : "10px"
		});
		$('.bcup .ad-fixed-banner-md .header, .bcup .ad-fixed-banner-md .header-bootstrap').css({
			"margin-top" : "10px"
		});
		$('.bcup .reskin-wrapper').css({
			"z-index" : "0"
		});
		$('#ad-leaderboard').css({
			"display" : "none"
		});
		$('head').append('<style>.bcup .mnjw--desktop .mnjw--minimize .mnjw__position{right: ' + sideWidth + 'px !important;}</style>');
	  $('head').append('<style>#Root > header.header.static > div.header__advertising{height: 0 !important;}</style>');
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var widgetwidth = $('#scrolling_share_links').width();
	var widget = 0 - integration.custom.FrameSideRight - widgetwidth;
	if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
		$("#scrolling_share_links").css({
			"display" : "none"
		});
	}
	if (integration.custom.ProductTypes === "PageSkin2" || integration.custom.ProductTypes === "PageSkin2Plus"|| e.data.treatment.find(treatments)) {
		$("#scrolling_share_links").css({
			"margin-left" : widget
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\n    <!--\n    google_ad_client = \"ca-pub-1533521060959988\";\n    /* Skin Leader Passback */\n    google_ad_slot = \"1940409187\";\n    google_ad_width = 728;\n    google_ad_height = 90;\n    //-->\n<\\script>\n<script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
