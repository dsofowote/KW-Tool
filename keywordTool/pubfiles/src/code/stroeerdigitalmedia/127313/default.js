integration.meta = {
	'sectionID' : '127313',
	'siteName' : 'GoFeminin - Tablet - (DACH)',
	'platform' : 'tablet'
};

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707055',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1011,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_StartScrollOnAnchor" : true,
	'plr_PageHeightAdjustment' : -170,
	'plr_ScrollAdjustment' : 86,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#head-nav.closed").css({
			"visibility" : "visible"
		});
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('#spacer').hide();
		$('#content, footer, #sas_swf, #sub, #sas_banner').css({
			"max-width" : "1002px",
			"margin" : "0 auto"
		});
		$("#header-content, #main-nav").css({
			"width" : "99%"
		});
		/*
		$("#main-nav-container, #header-content, nav#main-nav").css({
			"max-width" : "980px",
			"margin" : "0 auto",
			"left" : "0",
			"right" : "0"
		}); */
		$('head').append('<style type="text/css">#sub {top: 0 !important;}</style>');
		$('head').append('<style type="text/css">#sas_banner {margin-top: 10px !important;}</style>');
		$('head').append('<style type="text/css">.af-block-editorial-big:nth-child(even) {margin-left: 1px !important;}</style>');
		$('#div-gpt-ad-banner').hide();
		$('.af-banner').hide();


		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$('#content, #footer, #sas_swf, #sub, #sas_banner').css({
				"margin" : "0"
			});
			$('#content').css({
				"padding-left" : "0"
			});
			$('#head-nav').css({
				"margin-left" : "-20px",
				"width" : "calc(100% + 20px)"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});


integration.on("layoutChange", function(e) {
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinTopNav();
    $( document ).scroll(function() {
        integration.custom.InSkinTopNav();
    });
});

integration.custom.InSkinTopNav = function() {
    //var height = $(document).scrollTop();
    if( height < integration.custom.PageSkinTopPanel ){
    	//var newheight = integration.custom.PageSkinTopPanel - height;
        $("#header-content").css({
            "margin-top" : newheight
        });
    }else{
        $("#header-content").css({
            "margin-top" : "0px"
        });
    }
}
