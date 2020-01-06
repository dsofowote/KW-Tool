integration.meta = {
	'sectionID' : '127455',
	'siteName' : 'Pocket Lint - Desktop - (INT ex UK & US)',
	'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
}




integration.testParams = {
	'desktop_resolution' : [1306]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725468',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 986,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"left" : "-8px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<!-- Inskin - Pocket-Lint 1x1 -->\n<script src=\"http://www.googletagservices.com/tag/js/gpt.js\">\n   googletag.pubads().definePassback(\n      '/92354202/pocket-lint-main-tag', [1, 1])\n      .setTargeting(\"passback\", \"inskin\")\n      .setTargeting(\"revive\", \"true\")\n      .display();\n<\\script>";
}; 