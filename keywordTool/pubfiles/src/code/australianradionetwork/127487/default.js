integration.meta = {
	'sectionID' : '127487',
	'siteName' : 'Kiis Network- Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1400]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '726703',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1140,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
	   $(".po-audio-player__main-container").css({
			"width" : "1140px",
			"margin" : "auto",
		  "position" : "relative",
		  "margin-top" : "70px"
	   });
		 $(".po-audio-player__spacer--is-visible").css({
			"height" : "0px"
		 });
		 $("#page").css({
			 "background-image" : "none"
		 });
	   $("body").css({
		  "background" : "none"
	   });
	   $("#primary-nav").css({
		  "z-index" : "12"
	   });
		 window.unloadPageskin = function() {
			 try {
				 integration.destroy();
			 } catch(e) {
			 };
		 }
   }
});


integration.on("adServed", function(e) {
    var headHeight = $("#primary-nav").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});
