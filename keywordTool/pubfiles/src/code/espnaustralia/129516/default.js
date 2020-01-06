integration.meta = {
    'sectionID' : '129516',
    'siteName' : 'ESPN Australia - (Pagelead) - Smartphone - ( AU )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1085425',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
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
    stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1), .inskinLoaded .ism-indicator{z-index: 1000007 !important;}';
    stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(2){z-index: 10000000 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
