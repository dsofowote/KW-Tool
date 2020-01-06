integration.meta = {
   'sectionID' : '126993',
   'siteName' : 'Serienjunkies - Desktop - (DE)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708076',
   'plr_PageAlignment' : 'centre',
   //"plr_FramePositionCSS" : "margin: 0 auto;border-right: 160px solid transparent;",
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   // $('head').append('<style type="text/css">.afs_ads {display:none!important;}</style>');
	   $('head').append('<style type="text/css">#sj-ad-wrapper {margin-top: 0px!important;}</style>');
	   $("#ip_page_wrapper, .cc_banner").css({
		   "max-width" : "960px",
		   "margin" : "0 auto"
	   });
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "9999"
    });
});
