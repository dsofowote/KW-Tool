integration.meta = {
   'sectionID' : '126422',
   'siteName' : 'Hausgarten - Tablet - (DE)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707633',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 980,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
      $('.adsbygoogle').css({'display':'none'});
      $('body').append('<style>.o-area__wrapper, .o-area__content__wrapper, .o-area__header{max-width:980px !important; margin:0 auto !important}</style>');
       if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
           /* Pageskin Edge specific changes */
           integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
           integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
           $('.o-area__wrapper').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2})

       }
   }
});