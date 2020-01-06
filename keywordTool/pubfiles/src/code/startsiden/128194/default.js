integration.meta = {
	'sectionID' : '128194',
	'siteName' : ' ABCNyheter - Desktop - (NO) ',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '988189',
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
		$(".c-ad.c-ad--banner980x300.u-desktop-only.is-loaded").css({
			"display" : "none"
		});
	}
}); 

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/36021320/passback\" height=\"300\" width=\"980\" data-json='{\"targeting\":{\"passback\":[\"inskin\"]}}'></div>\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};