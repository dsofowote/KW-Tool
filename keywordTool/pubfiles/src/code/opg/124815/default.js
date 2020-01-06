integration.meta = {
	"sectionID" : "124815",
	"siteName" : "Flashon",
	"publisher" : "opg",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	"srv_SectionID" : "124815",
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_Responsive" : true,
	"plr_PageWidthAdjustment" : -150,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adServed", function(e) {
	$('#wrap, #site-navigation').css({
		'margin-left' : '10px'
	});
	hh = $('html').height();
	$('body').css({
		'height' : hh
	});
	$('#masthead').css({
		'width' : '854px'
	});
	$('#masthead').css({
		'margin' : '0 auto'
	});
	$('.ism-frame').css({
		'z-index' : '4'
	});
});
