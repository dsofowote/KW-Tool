integration.meta = {
	'sectionID' : '125994',
	'siteName' : 'Gamespot',
	
	'platform' : 'desktop',
	'restrictions' : ''
};




integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true,
	'window-load': true
});

integration.testParams = {
	'desktop_resolution' : [1430]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706642',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1170,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"padding-top" : "0px"
		});
		$("#site-main").css({
			"padding-top" : "96px"
		});
		$("#masthead").css({
			"max-width" : "1170px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		/*if ($("#site-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#site-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}*/
		$("#site-wrapper, #footer").css({
			"max-width" : "1170px",
			"margin" : "0 auto"
		});
		$("#footer > .container").css({
			"max-width" : "1160px"
		});
		$("#skin_top-wrap").css({
			"height" : "0px"
		});
	}
});

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
		$("#masthead").css({
			"margin-top" : newheight
		});
	} else {
		$("#masthead").css({
			"margin-top" : "0px"
		});
	}
};

window.ISMPassback = function() {
  return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-2679103605715789\";\n/* ATF - 728x90 */\ngoogle_ad_slot = \"6761856601\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};