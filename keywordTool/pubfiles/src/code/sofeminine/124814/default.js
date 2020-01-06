integration.meta = {
   'sectionID' : '124814',
   'siteName' : 'Alfemminile - Desktop - (IT)',
   'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	"desktop_resolution" : [0]
};

integration.flaggedTests = [];

integration.params = {
	"plr_PageAlignment" : "center",
	"plr_ContentW" : 1060,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_UseCreativeSettings" : true,
	//"plr_PageHeightAdjustment" : -100,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : ""
};

integration.on('adCallResult', function(e) {

	});

integration.on("layoutChange", function(e) {
	
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
        var newheight = integration.custom.PageSkinTopPanel - height;
        $("#header > header").css({
            "margin-top" : newheight
        });
    }else{
        $("#header > header").css({
            "margin-top" : "0px"
        });
    }
};

integration.on("adServed", function(e) {
	
	$("footer").css({
		"width" : "1060px", 
		"margin" : "0 auto"
	});
	
	$('body').append('<style type="text/css">header {transform: none !important; -webkit-transition: none !important; transition: none !important;}</style>');
	
});