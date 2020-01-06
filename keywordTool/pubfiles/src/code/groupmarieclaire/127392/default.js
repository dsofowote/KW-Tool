integration.meta = {
	'sectionID' : '127392',
	'siteName' : 'Tête à modeler - Smartphone - FR',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725461',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var windowWidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var contentWidth = windowWidth - integration.custom.FrameSideRight;
		integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

		$("head").append("<style>.inskinLoaded #show_menu_mobile, .inskinLoaded #togglesearch{right: " + integration.custom.FrameSideRight + "px;}</style>");

		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #appbundle_newsletter_subscribe_email{width: 96%;}';
		stylesCSS += '.inskinLoaded .creabulBox{width: 100%;}';
		stylesCSS += '.inskinLoaded .module.pub > .ad > img{width: 100%;}';
		stylesCSS += '.inskinLoaded .owl-item{max-width:' + (contentWidth - 15) + 'px}';
		stylesCSS += '.inskinLoaded #togglesearch{}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		var laychangeCSS = '<style type="text/css" id="ism-laychange"></style>'
		$('head').append(laychangeCSS);
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11000"
	});
});

integration.on("layoutChange", function(e) {
	$("#show_menu_mobile").on("click", function() {
		setTimeout(function() {
			if ($("#show_menu_mobile").hasClass("open")) {
				integration.base.hideAd();
				$('body').removeClass('inskinLoaded');
			} else {
				integration.base.showAd();
				$('body').addClass('inskinLoaded');
			}
		}, 100);
	});

	$(".module.ombre.module-newsletter, .module.pub, .list.bleu > div").addClass("ism-laychange");
	integration.custom.laychange();
	$(window).on("resize", function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	$("head").append("<style id='inskinStyle'>.inskinLoaded #show_menu_mobile, .inskinLoaded #togglesearch{transition:0.2s;margin-top:' + integration.custom.PageSkinTopPanel + 'px}</style>");
	$(document).scroll(function() {

		var scrollTop = $(document).scrollTop();
		console.log("scro", scrollTop);
		if (scrollTop > integration.custom.PageSkinTopPanel) {
			console.log("below");
			$("#inskinStyle").html('.inskinLoaded #show_menu_mobile, .inskinLoaded #togglesearch{transition:0.2s;margin-top:0px}');
		} else {
			$("#inskinStyle").html('.inskinLoaded #show_menu_mobile, .inskinLoaded #togglesearch{transition:0.2s;margin-top:' + integration.custom.PageSkinTopPanel + 'px}');
		}
	});

	$("#ism-laychange").html(".ism-laychange{max-width: " + (contentWidth - 10) + "px; padding-left: 0 !important; padding-right: 0 !important;}");

}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$(".module.ombre.module-newsletter").removeClass("ism-laychange");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/21616267588/Habillage/Network', [1, 1]).display();\n<\\script> ";
};
