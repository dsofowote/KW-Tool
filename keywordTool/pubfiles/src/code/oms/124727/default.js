integration.meta = {
	"sectionID" : "124727",
	"siteName" : "Schw�bische",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707280',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1080,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_PageHeightAdjustment" : 440,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("layoutChange", function(e) {

	frside = e.data.plr_FrameSide;

	$('#schwaebische_container').css({
		'margin-left' : '40px'
	});
	$('#placeholder').css({
		'height' : 'auto'
	});
	$('footer').css({
		'left' : frside
	});

	$('.ism-frame').css({
		'z-index' : '951'
	});
});
