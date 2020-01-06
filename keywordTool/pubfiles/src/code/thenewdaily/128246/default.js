integration.meta = {
	'sectionID' : '128246',
	'siteName' : 'The New Daily - Desktop- (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '994576',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1180,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	"plr_FastInit" : true,
	'plr_ForceFrameBottom' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body > .adunit, .tnd-footer, #js-main > .adunit, #js-home-main > .adunit, #js-masthead-holder').css({
			"width" : "1180px",
			"margin" : "0 auto"
		});
		$('.tnd-skyscrapers, .tnd-heading, .tnd-module-home, #js-main, #js-home-main, #js-category-main, .tnd-subcategory-nav').css({
			"width" : "1150px",
			"margin" : "0 auto"
		});
		$('a.masthead__logo').css({
			"margin-left" : "10px"
		});
		$("head").append("<style>.adunit--common-leader{display: none !important;}</style>");
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/71161633/MTPB_thenewdaily/Inskin_passback\" height=\"90\" width=\"728\"></div>\n \n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
