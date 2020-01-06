integration.meta = {
	'sectionID' : '125840',
	'siteName' : 'NM+ - Smartphone - (HK)',
	'platform' : 'smartphone'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1016660',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".post-header").height();
		if ($(".post-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#page");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : headHeight,
			"position" : "relative"
		});

		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		var pageTop = $("header.header").height();
		stylesCSS += '.inskinLoaded #page{margin-top: ' + pageTop + 'px;}';
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;
		stylesCSS += 'body.inskinLoaded, .inskinLoaded .footer_fixed {max-width: ' + cwidth + 'px;}';
		var mpuMargin = $(".container.container--main").css("padding-left");
		stylesCSS += '.inskinLoaded div[id^="div-gpt-ad"]{margin-left: -' + mpuMargin + ';}';
		stylesCSS += '.inskinLoaded .post-header{z-index: 10001;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
	$("#inskinanchor").css({
		"z-index" : "10000"
	});

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});
