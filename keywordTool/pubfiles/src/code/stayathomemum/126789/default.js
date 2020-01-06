integration.meta = {
   'sectionID' : '126789',
   'siteName' : 'Stay at Home Mum - Tablet - (AU)',
   'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707656',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1024,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};


integration.on('layoutChange', function(e) {
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSide;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;

	$('.sumome-share-client-wrapper').css({
		"left" : integration.custom.PageSkinSidePanel
	});
});

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	  $('.mm-page, div.wrap.container.rootcontainer').css({
		  "max-width" : "1024px",
		  "margin" : "0 auto"
	  });
      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         $('.mm-page, div.wrap.container.rootcontainer').css({
   		  "margin" : "0"
   	  	 });
      }
   }
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/4843749/leaderboard', [[970, 90]]).display();<\\script>";
};
