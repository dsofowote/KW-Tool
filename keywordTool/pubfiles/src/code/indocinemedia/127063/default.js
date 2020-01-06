integration.meta = {
   'sectionID' : '127066',
   'siteName' : 'Robb Report - Tablet- (TH)',
   'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707446',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1002,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};



integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		
		$(".footer, #page, .header-wrapper, .top-menu").css({
			"max-width" : "1002px",
		});
		
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
	
			$('head').append('<style type="text/css">.top-menu.stuck {left:20px !important;}</style>');
			
			$("#page").css({
				"margin" : "0px",
			});
			
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			
		}else{
			$(".footer, #page, .header-wrapper, .top-menu").css({
				"margin" : "0 auto"
			});
		}

	}
});

integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;    
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    $('.back-to-top').css({
    	'right' : integration.custom.PageSkinRightPanel + 20 + 'px'
    });
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });

});

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
    	$('.back-to-top').css({
    		'bottom' : integration.custom.PageSkinBottomPanel + 20 + 'px'
    	});
    } else {
    	$('.back-to-top').css({
    		'bottom' : '20px'
    	});
    }
}

