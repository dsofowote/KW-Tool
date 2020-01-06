integration.meta = {
   'sectionID' : '127891',
   'siteName' : 'Ntd.tv - Desktop - (AU &amp; ASIA)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1520]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '917413',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1260,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	
   	$("header, footer").css({
		   "max-width" : "1260px",
		   "margin" : "0 auto"
	   });
	   
	   $("footer").css({
		   "display" : "block"
	   });
   }
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
        $("#backtotop a").css({
            "right" : integration.custom.FrameSideRight
        });
    }
});
