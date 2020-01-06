integration.meta = {
   'sectionID' : '126661',
   'siteName' : 'Enfeminino - Desktop - (ES)',
   'platform' : 'desktop'
};

integration.telemetry.setup({
	'keywords': true,
	'url': true,
	'ad-served': true,
	'base-ready': true,
	'ad-call-response': true,
	'ad-call': true,
	'failed-test': true,
	'impression': true,
	'window-load': true,
	'custom': true
});

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708039',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1040,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	   $('#content').css({
		   "padding" : "0"
	   });
	   $('footer').css({
		   "max-width" : "1040px",
		   "margin" : "0 auto"
	   });
	   integration.custom.InSkinTopNav();
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("header").css({
            "margin-top" : newheight
        });
    }else{
        $("header").css({
            "margin-top" : "0px"
        });
    }
}
