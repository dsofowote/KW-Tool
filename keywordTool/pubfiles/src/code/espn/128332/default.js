integration.meta = {
	'sectionID' : '128332',
	'siteName' : 'ESPN - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1004033',
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
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch(e) {
			};
		}
		var headHeight = $("#header-wrapper").height();
		if ($("#header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header-wrapper");
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
		stylesCSS += '.inskinLoaded #pane-main{margin-top: ' + headHeight + 'px; padding-top: 0px !important;}';
		stylesCSS += '.inskinLoaded .twitter-video{min-width: 280px !important;}';
		stylesCSS += '.inskinLoaded #article-feed .ad-300{min-width: 300px !important; margin-left: -20px;}';
		stylesCSS += '.inskinLoaded .ad-slot.ad-slot-banner.ad-wrapper{display: none !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
