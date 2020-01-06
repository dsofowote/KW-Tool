integration.meta = {
	"sectionID" : "124726",
	"siteName" : "Schwarzw�lder Bote",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706358',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_GetContentHeightVersion" : 2
};
integration.on("adCallResult", function(e) {
	$('#top-of-page > div.site.ressort, #superbanner, #top-of-page > div.site.article.lokal').css({
		'padding-left' : '0',
		"margin" : "0 auto",
		"margin-left" : "auto !important"
	});
	$('head').append('<style type="text/css">.article-social-bar {left: 0 !important;}</style>');
	var width = $(window).width();
    var sideWidth = (width - 940)/2; /* content width divided by 2 */
    $('head').append('<style type="text/css">#article-social-bar.fixed {left: ' + (sideWidth + 10) + 'px !important;}</style>');
});
