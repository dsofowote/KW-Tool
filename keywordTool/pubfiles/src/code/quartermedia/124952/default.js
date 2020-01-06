integration.meta = {
	"sectionID" : "124952",
	"siteName" : "Magistrix ",
	"publisher" : "quarter",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1295]
};

integration.params = {
	'mf_siteId' : '706543',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 975,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "ads--content-ad, google-dfp"
};

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'-moz-box-sizing' : 'content-box',
		'box-sizing' : 'content-box',
		'z-index' : '1001'
	});
	$('.site-background-image').css({
		'background-image' : 'none'
	});
	$('#bigsize-top').hide();
	$('html').css({
		'background-color' : 'transparent'
	});
	$('#skyscraper-right').css({
		'width' : '0px',
		'padding' : '0px'
	});
	$('.container').css({
		'width' : '975px'
	});
	$('.site-content').attr({
		'style' : 'width : 100% !important'
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- Beginning PassBack for Ad unit Digineo_GmbH/magistrix.de ### size: [[728,90]] -->\n                <script type='text/javascript' src='http://www.googletagservices.com/tag/js/gpt.js'>\n                               googletag.pubads().definePassback('27763518/Digineo_GmbH/magistrix.de', [[728,90]]).setTargeting('inskin',['noinskin']).display();\n                <\\script>\n<!-- End Passback -->";
};
