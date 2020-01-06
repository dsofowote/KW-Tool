integration.meta = {
	'sectionID' : '125887',
	'siteName' : 'Daily Mail UK',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = ['/home/index.html', '/news/index.html', '/ushome/index.html', '/sport/index.html', '/tvshowbiz/index.html', '/auhome/index.html', '/femail/index.html', '/health/index.html', '/sciencetech/index.html', '/money/index.html', '/video/index.html', '/travel/index.html'];

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681809',
	'plr_FastInit' : true,
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 984,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : 'banner',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_PageScanExclude' : ' .page-header, #footer, .page-footer, .and-footer, .linkro-wocc, .trc_related_container, #reader-comments, #infinite-list '
	// 'plr_PageScanExclude' : '.beta, #p-17, #infinite-list, #most-read-news-wrapper, #reader-comments, #taboola-below-main-column, #most-watched-videos-wrapper, #taboola-below-article-thumbnails-2nd, script, #mini-carousel-wrapper, .articles-by-day-new, .nav-primary, .and-footer, .page-footer'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"background" : "none"
		});
		$("#js-sky-right, #js-sky-left").hide();
		$("head").append("<style>.billboard_wrapper{display: none !important} .molads_ldr_top_on .page-banner{padding-top:0px !important}</style>");
		$("html, body").css({
			"overflow" : "visible"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1540) {
		var sideWidth = (width - 984) / 2;
		$(".floating-buttons").css({
			"right" : sideWidth + 20
		});
	} else {
		$(".floating-buttons").css({
			"right" : "10px"
		});
	}
}
/* Passback Tag */
window.ISMPassback = function() {
	if (!integration._userConsent()) {
		return '';
	}
	return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-4180835694166255\";\n/* (DN) Google AdExchange - DMUK - ROS - UK - Billboard - CPM */\ngoogle_ad_slot = \"4396642419\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 250;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
