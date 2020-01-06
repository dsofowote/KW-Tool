integration.meta = {
	'sectionID' : '127092',
	'siteName' : 'Free - Smartphone - (FR)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708104',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 0,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(window).on('scroll', function() {
			//Imitating scroll function on site where next & previous buttons for articles move
			var hauteurcontenu = $('#content').offset().top - 88;
			if ($(window).scrollTop() > hauteurcontenu && $("body").hasClass("inskinLoaded")) {
				$('.top-pos').removeClass();
				$("#mobile_suiv").addClass('middle-pos');
				$(".middle-pos").css({
					"right" : "55px"
				});
			} else if ($(window).scrollTop() < hauteurcontenu && $("body").hasClass("inskinLoaded")) {
				$('.middle-pos').removeClass();
				$("#mobile_suiv").addClass('top-pos');
				$(".top-pos").css({
					"right" : integration.custom.FrameSideRight
				});
			}
		});
		if ($("body").length == 1) {
			$("body").prepend("<div id='inskinanchor'></div>");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -47
			});
			var headheight = $('#header').outerHeight();
			$("#inskinanchor").parent().css({
				"margin-top" : headheight + 5
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSideTop = e.data.plr_FrameTop;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
	$("#hamburger").on("click touchstart", function() {
		integration.custom.openNav();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var cwidth = wwidth - integration.custom.FrameSideRight;
	var bline = $('#navrub').height();
	var headerHeight = $('#article > h1').height();
	var sumHeight = bline + headerHeight + integration.custom.FrameSideTop;
	$('body').addClass('inskinLoaded');
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #mobile_suiv{right: ' + integration.custom.FrameSideRight + 'px;} .inskinLoaded #contenu{margin-top: 5px !important;}';
	stylesCSS += '@media only screen and (max-width: 740px), only screen and (max-width: 6in) and (orientation: portrait), only screen and (max-device-width: 480px){.inskinLoaded #mobile_suiv{top: calc(77% - ' + sumHeight + 'px);}}';
	stylesCSS += '@media only screen and (max-width: 740px), only screen and (max-width: 6in) and (orientation: portrait), only screen and (max-device-width: 480px){.inskinLoaded #mobile_prev{top: calc(77% - ' + sumHeight + 'px);}}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	$(".swipe-wrap").children().css({
		"max-width" : cwidth
	});
};

integration.custom.openNav = function() {
	setTimeout(function() {
		if ($("#hamburger").hasClass("menumobileopen")) {
			integration.base.hideAd();
			$("#mobile_suiv").hide();
		} else {
			integration.base.showAd();
			$("#mobile_suiv").show();
		}
	}, 300);
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#mobile_suiv').removeClass('top-pos middle-pos').css({
		"right" : "0"
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});

