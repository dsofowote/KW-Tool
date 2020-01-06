integration.meta = {
	"sectionID" : "098765",
	"siteName" : "Matttesting",
	"publisher" : "Matttestingpub",
	"platform" : "desktop"
};




integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.params = {

	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_FastInit' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 0,

};

integration.on('adCallResult', function(e) {

});
/* Passback Tag */
window.ISMPassback = function() {
   //return "<script src=\'https:\/\/www.googletagservices.com\/tag\/js\/gpt.js\'>\n  googletag.pubads().definePassback(\'\/99905378\/mike_pubtest_billboard\', [[970,250]])\n .display();\n<\/script>\n";
};
