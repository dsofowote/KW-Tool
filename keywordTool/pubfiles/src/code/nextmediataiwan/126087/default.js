integration.meta = {
	'sectionID' : '126087',
	'siteName' : 'Apple Daily Taiwan - Smartphone - ( TW )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1010109',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $(".nm-header-revamp.clear.ui-header.ui-bar-a").height();
		var scrollAdjust = $(".top-bar-revamp-inside").height();
		if ($(".nm-header-revamp.clear.ui-header.ui-bar-a").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".nm-header-revamp.clear.ui-header.ui-bar-a");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_ScrollAdjustment : scrollAdjust
			});
		}

		$('html').addClass('inskinLoaded');
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var wwidth = $(window).width();
		var cwidth = wwidth - integration.custom.FrameSideRight;
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .nm-base.nm-page-time.ui-page.ui-body-c.ui-page-panel.ui-page-active{overflow: visible;}';
		stylesCSS += '.inskinLoaded .nm-header-revamp.clear.ui-header.ui-bar-a{width: ' + wwidth + 'px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	var pageHeight = $("div[data-role='page']").height();
	$("head").append("<style id='ism-height-detection'>html.inskinLoaded {height: " + pageHeight + "px !important;}</style>");

	$("<iframe class='ism-height-change-listener' tabindex='-1'></iframe>").insertBefore(".ui-panel-content-wrap.ui-body-c.ui-panel-animate.ui-panel-content-wrap-closed");
	$("head").append("<style>.ism-height-change-listener{position: absolute; top: 0; bottom: 0; left: 0; height: 100%; width: 0; border: 0; background-color: transparent;}</style>");
	$('.ism-height-change-listener').each(function() {
		$(this.contentWindow).resize(function() {
			var pageHeight = $("div[data-role='page']").height();
			$("#ism-height-detection").html("html.inskinLoaded {height: " + pageHeight + "px !important;}");
		});
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	$(".ism-height-change-listener").remove();
});
