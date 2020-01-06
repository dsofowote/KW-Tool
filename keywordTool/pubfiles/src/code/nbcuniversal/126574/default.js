integration.meta = {
	'sectionID' : '126574',
	'siteName' : 'E!Online-Desktop-UK',
	'platform' : 'desktop'
};

/*As this integration has a passback we must use synchronous mode*/
 

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '706909',
	'plr_PageAlignment' : 'center',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_ContentW' : 1280,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#HFooter').css({
			'padding-bottom' : '0px'
		});
		$('.nav__extender').css({
			'display' : 'none'
		});
		$('#Header_BannerBlock').css({
			'display' : 'none'
		});
		$(".nav__adbanner").css({
			"min-height" : "0px",
			"padding" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
});

/* Passback Tag
 window.ISMPassback = function() {
 return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/4295/eonline.uk', [728, 90]).display();\n<\\script>";
 };*/

/* Passback Tag */
window.ISMPassback = function() {
   return "<div id=\"switch_placeholder_f2f65764f2f6d697b05ea66074db4cb7\" class=\"switch_placeholder\"></div>\n<script> (__scads = window.__scads || []).push({\"z\":76,\"targetId\":\"switch_placeholder_f2f65764f2f6d697b05ea66074db4cb7\",\"domain\":\"delivery.nbc.switchadhub.com\",\"width\":\"0\",\"height\":\"0\"}); <\\script>\n<script async src=\"//delivery.nbc.switchadhub.com/adserver/sat.js\"><\\script>";
};