integration.meta = {
	'sectionID' : '128013',
	'siteName' : 'Limburger - Desktop - ( NL )',
	'platform' : 'desktop'
};

integration.async = false;

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '967657',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : -110,
	'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("body > header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -135
			});
		}
		var headHeight = $("body > header").outerHeight() + $(".site-subnav-sticky").outerHeight();
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative",
			"z-index" : "6"
		});
		$(".social-sticky-wrapper").css({
			"z-index" : "5",
			"top" : "0"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {	
	var buttonsTop = $(window).height() - $(".social-sticky-bar > .article__share.list-unstyled.margin-bn").height();
	$(".social-sticky-bar").css({
		"left" : "-50px",
		"top" : buttonsTop + 5
	});
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=278439&w=1800&h=1000&ic='\n+ (window.tokuslid_ic_1800x1000 || '') + '&sb='\n+ (window.tokuslid_sb_1800x1000 || '') + '&gd='\n+ (window.tokuslid_gd_1800x1000 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>";
};