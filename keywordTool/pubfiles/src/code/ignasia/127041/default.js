integration.meta = {
	'sectionID' : '127041',
	'siteName' : 'IGN - Mobile - (Asia) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708063',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'main'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #mobile_search {margin-top: 125px;}';
		stylesCSS += '.inskinLoaded .ul_nav_show {width: '+ (windowWidth - 74) +'px !important; top: 125px !important;}';
		stylesCSS += '.inskinLoaded {overflow:visible;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	$("#btnNav").on('click', function() {
		console.log("nav click");
		var sideMenu = $(".show_nav").length;
		if (sideMenu > 1) {
			console.log("nav open");
			$(".ism-frame").parent().css({"display" : "none"});
			$("html").css({"padding": "0"});
		}
	});

	$("#btnSearch").on('click', function() {
		console.log("search click");
		var sideSearch = $(".show_search").length;
		if (sideSearch >= 1) {
			console.log("search open");
			$(".ism-frame").parent().css({"display" : "none"});
			$("html").css({"padding": "0"});
		} else if (sideSearch == 0) {
				$(".ism-frame").parent().css({"display" : "block"});
				$("html").css({"padding": "0 74px 0 0"});
			}

	});

	$("#btnNavClose").on('click', function() {
		console.log("nav click");
		var sideMenu = $(".show_nav").length;
		if (sideMenu == 0) {
			$(".ism-frame").parent().css({"display" : "block"});
			$("html").css({"padding": "0 74px 0 0"});
		}
	});

	$("head").append("<style>.inskinLoaded #nav-wrapper{max-width: " + contentWidth + "px}</style>");
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "10001"
	});

	window.dispatchEvent(new Event('resize'));
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
