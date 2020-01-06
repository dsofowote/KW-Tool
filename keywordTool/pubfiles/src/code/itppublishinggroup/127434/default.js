integration.meta = {
   'sectionID' : '127434',
   'siteName' : 'Arabian Business - (ENGLISH LANGUAGE) - Desktop - (MENA)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '721520',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1290,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
   	if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		
		$("#page-wrp").css({
			"overflow" : "visible"
		});
		
		$("#footer").css({
			"max-width" : "1290px",
			"margin" : "0 auto"
		});
		
	    integration.custom.InSkinTabHide();
	    $(window).resize(function() {
	        integration.custom.InSkinTabHide();
	    });
   }
});

integration.custom.InSkinTabHide = function(){
    var ismWinWidth = $(window).width();
    var minWindowWidth = 1380;
    if ( ismWinWidth < minWindowWidth ){
        $("#at4-share").hide();
    } else {
        $("#at4-share").show();
    }
}   