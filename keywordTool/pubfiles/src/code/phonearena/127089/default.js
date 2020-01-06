integration.meta = {
	'sectionID' : '127089',
	'siteName' : 'Phone Arena - Smartphone - (UK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707941',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('layoutChange', function(e) {
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var wwidth = $(window).width();
		var headerHeight = $('#headerMenu').height();
		if ($("#headerMenu").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#headerMenu");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -40,
				plr_StartScrollOnAnchor : true
			});
		}
		$('#inskinanchor').css({
			"margin-top" : headerHeight
		});
		$('#headerMenu').css({
			"position" : "absolute",
			"width" : "100%",
			"top" : "0",
			"left" : "0"
		});
		$('#viewport').css({
			"overflow" : "visible"
		});
		$('head').append('<style type="text/css">.s_w_300.clear {margin-left: -13px !important;}</style>');
		$('head').append('<style type="text/css">.s_rating_bar {width: 100% !important;}</style>');
		$('head').append('<style type="text/css">#btnToggleMenu {margin-left: 0 !important;}</style>');
		$('#sidemenu').css({
			"z-index" : "5000",
			"top" : "0"
		});
		$("[id*='div-gpt-ad']").css({
			"margin-left" : "-13px"
		});
		
		var menuToggle = 0;
		$('#btnToggleMenu').click(function(){
			console.log('clicked');
			if (menuToggle == 1){
				console.log('open');
				$("body").css({
					"overflow" : "visible"
				});
				menuToggle = 0;	
			} else {
				console.log('closed');
				$("body").css({
					"overflow" : "hidden"
				});
				
				menuToggle = 1;
			}
		});
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});
