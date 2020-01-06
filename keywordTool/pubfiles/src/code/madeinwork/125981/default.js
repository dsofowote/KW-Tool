integration.meta = {
	'sectionID' : '125981',
	'siteName' : 'Petit Chef - France - Desktop - (FR)',
	'platform' : 'desktop'
};
integration.testParams = {
	'desktop_resolution' : [1265]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706715',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1005,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};
 
integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {

   }
});

integration.on('layoutChange', function(e) {
	var headerHeight = $("#header-sticky").height() + $("#rd-sticky").height();
	$(window).scroll(function() {
		if ($("#header-sticky").length == 1 && $(window).scrollTop() > 0) {
			integration.base.setCfg({
				plr_ScrollAdjustment : headerHeight
			});
		}
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=2140\"><\\script>";
};

