integration.meta = {
	"sectionID" : "124597",
	"siteName" : "Glamourparis ",
	"publisher" : "condenast",
	"platform" : "desktop"
};

integration.telemetry.setup({
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706622',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1320,
	"plr_PageHeightAdjustment" : -99,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		var headerHeight = $('#header').height();

		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
			});
		}
		$("#inskinanchor").css({
			"top" : headerHeight,
			"position" : "relative"
		});

		$('body > footer > div.glam_sites').css({
			'padding-bottom' : '0px'
		});

		$('.main_nav, body > div.wrapper_home.videos, body > div.merci, body > footer, body > section, body > div.shooting_mois.linked, body > div.votre_top, #global_wrapper > .articles_preferes').css({
			'max-width' : '1320px',
			'margin' : '0 auto'
		});

		$("head").append("<style>.main_article{max-width: 1320px !important; margin: auto; margin-top: " + headerHeight + "px;}</style>");

		$(".copyright_photo").css({
			"right" : "-70px"
		});

		$(".banner_top").css({
			"height" : "0px"
		});

	}

});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var stickyLeft = ($(window).width() - 1320) / 2;
	$("head").append("<style>.glam_bar_social.sticky{left: " + stickyLeft + "px;}</style>");
}
/*
 integration.on('layoutChange', function(e) {
 $(window).resize(function() {
 var winWidth = $(window).width();
 if (winWidth <= 1740) {
 $('.sticky_share_bottom.share_buttons, .intro_diaporama_3 .intro_diaporama_3_wrapper .sticky_share_bottom.share_buttons, .wrapper_home_pub.dossier .wrapper_home .intro_dossier .sticky_share_bottom.share_buttons, .les_plus_lus_wrapper .les_plus_lus article .article_body .sticky_share_bottom.share_buttons, .wrapper_home_pub .wrapper_home .home_article .sticky_share_bottom.share_buttons, .wrapper_home_pub .wrapper_home.article .home_article.hsr .sticky_share_bottom.share_buttons, .most_recent_videos_wrapper .most_recent_videos article figure .counter_share .sticky_share_bottom.share_buttons, .astro_hr .hsr_astro .sticky_share_bottom.share_buttons').css({
 'left' : '200px'
 });
 } else {
 $('.sticky_share_bottom.share_buttons, .intro_diaporama_3 .intro_diaporama_3_wrapper .sticky_share_bottom.share_buttons, .wrapper_home_pub.dossier .wrapper_home .intro_dossier .sticky_share_bottom.share_buttons, .les_plus_lus_wrapper .les_plus_lus article .article_body .sticky_share_bottom.share_buttons, .wrapper_home_pub .wrapper_home .home_article .sticky_share_bottom.share_buttons, .wrapper_home_pub .wrapper_home.article .home_article.hsr .sticky_share_bottom.share_buttons, .most_recent_videos_wrapper .most_recent_videos article figure .counter_share .sticky_share_bottom.share_buttons, .astro_hr .hsr_astro .sticky_share_bottom.share_buttons').css({
 'left' : '19px'
 });
 }
 });
 });
 */

