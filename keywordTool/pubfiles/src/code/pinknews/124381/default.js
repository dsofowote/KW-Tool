integration.meta = {
	"sectionID" : "124381",
	"siteName" : "Pink News",
	"publisher" : "pinknews",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	
	
  'mf_siteId': '681693',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_EnableActiveResize" : false,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	'plr_PageHeightAdjustment' : -55,
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* If statement is very important. If element does not exist PageSkin will not display at all.
		 if ($("#navBar").length == 1) {
		 $("<div id='inskinanchor'></div>").insertAfter('#navBar');
		 integration.base.setCfg({
		 plr_AnchorParent : '#inskinanchor'
		 });
		 }*/
		$("#navBar").css({
			"position" : "relative"
		});
		$(".page-wrap.main").css({
			"padding-top" : "0"
		});
		$("#headline-section, .leaderboard").css({
			"max-width" : "1000px",
			"margin" : "0 auto"
		});
		$("#pre-head").css({
			"width" : "960px",
			"margin" : "0 auto",
			"margin-top" : "10px",
			"padding-left" : "20px",
			"padding-right" : "20px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$(".page-wrap.main").css({
				"margin-left" : "20px"
			});
			$("head").append("<style>.headline {margin-left: 0px !important;}</style>");
			integration.base.setCfg({
				plr_PageAlignment : "left"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	/* Makes the side menu display above the PageSkin when open */
	$("#click-menu").click(function() {
		var menuOut = $("#click-menu").hasClass("click-menu-active");
		if (menuOut) {
			$(".ism-frame").parent().css({
				"z-index" : "1000000"
			});
		} else {
			$(".ism-frame").parent().css({
				"z-index" : "-1"
			});
		}
		if ($(window).width() < 800) {
			$("#RMX").css({
				"margin-top" : integration.custom.PageSkinTopPanel
			});
		} else {
			$("#RMX").css({
				"margin-top" : "0"
			});
		}
	});
});

/*
 integration.on("layoutChange", function(e) {
 integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
 integration.custom.InSkinTopNav();
 $(document).scroll(function() {
 integration.custom.InSkinTopNav();
 });
 });

 integration.custom.InSkinTopNav = function() {
 var height = $(document).scrollTop();
 if (height < integration.custom.PageSkinTopPanel) {
 var newheight = integration.custom.PageSkinTopPanel - height;
 $("#navBar, #responsive-menu").css({
 "margin-top" : newheight
 });
 } else {
 $("#navBar, #responsive-menu").css({
 "margin-top" : "0px"
 });
 }
 }
 */

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/21627008189/Background_Inskin/Inskin_Passback\" height=\"1\" width=\"1\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};