integration.meta = {
   'sectionID' : '124512',
   'siteName' : 'This is network - (ROS) - Desktop - (UK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1228]
};

integration.params = {
	
	
   'mf_siteId': '681716',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_URLKeywords" : 2,
	"plr_ContentW" : 968,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "feedbackify",
	"plr_HideElementsByClass" : "leaderboard, header-ad, hidden-ad, adLoader, ad, mpu",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adServed", function(e) {

	$('#site').css('margin-top', '10px');

	InSkinTabHide();
	$(window).resize(function() {
		InSkinTabHide();
	});
});

integration.on("layoutChange", function(e) {

	$('[id^=ad-abs-]').each(function(index) {
		var adstatid = $(this).attr('id');
		if (adstatid.indexOf('-ad') >= 0) {
		} else {
			var adabsid = '#' + adstatid + '-ad';
			var adtop = $(this).position().top;
			$('head').append('<style>' + adabsid + ' {top: ' + adtop + 'px !important}</style>');
		}
	});
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- Beginning PassBack for Ad unit localworld/Inskin_Passback ### size: [[1,1]] -->\n <script type='text/javascript' src='http://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('5293/localworld/Inskin_Passback', [[1,1]]).display();\n <\\script>\n<!-- End Passback -->";
};