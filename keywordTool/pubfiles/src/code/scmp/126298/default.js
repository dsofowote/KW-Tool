integration.meta = {
   'sectionID' : '126298',
   'siteName' : 'SCMP - PageSkin Tablet',

   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708107',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1320,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $('.slide__content').css({'overflow-x':'visible', 'overflow-y':'visible'});
		$('#app, .article-swiper, .swiper-container').css({'overflow':'visible'});
		if ($("#main-content").length == 1) {
            $("<div id='inskinanchor'></div>").insertBefore("#main-content");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
		}
		$('#app').css({'max-width':'1320px', 'margin':'0 auto', 'height':'unset'});

      if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
         /* PageSkin Edge specific changes */
         integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
         integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
         $('#main-content').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
         integration.on("adServed", function(e) {
            $(".ism-frame").parent().css({
               'left' : -(integration.custom.FrameSideRight)/2
            });
         });
      }
      window.unloadPageskin = function () {
			try {
			  integration.destroy();
			} catch (e) {}
		  };
   }
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
