integration.meta = {
	'sectionID' : '126297',
	'siteName' : 'SCMP - PageSkin Desktop',

	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706807',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',


};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('.slide__content').css({'overflow-x':'visible', 'overflow-y':'visible'});
		$('#app, .article-swiper, .swiper-container').css({'overflow':'visible'});
		if ($("#main-content").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-content");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                // plr_PageHeightAdjustment : /*Enter minus value of navigation height here.*/,
            });
		}
		$('#app').css({'max-width':'1320px', 'margin':'0 auto', 'height':'unset'});
		window.unloadPageskin = function () {
			try {
			  integration.destroy();
			} catch (e) {}
		  };

	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/8134/scmp/desktop/ros', [300, 250]).setTargeting('pos', ['1']).display();\n<\\script>";
};