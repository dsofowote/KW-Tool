integration.meta = {
	'sectionID' : '128914',
	'siteName' : 'Entertainment Daily - Desktop - (UK)',
	'platform': 'header bidding'
};

integration.params = {
	'mf_siteId' : '1041651',
	'plr_PageAlignment' : 'center',
	'plr_UseFullVersion' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'srv_SectionID' : '128914',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseCreativeSettings' : true,
	'plr_ContentW' : 1150,
	'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
	//console.log(e.data.device);
	//console.log(window.location.search);

	//var kwQ = window.location.search;
	//var sQ = kwQ.replace("?", "1");
	//console.log(kwQ);
	//console.log(sQ);
	
	desktopIntegration = function() {
		integration.base.setCfg({
			'plr_ContentW' : 1150,
			'plr_FastInit' : true,
		});

		$("#header_wrapper, #header_ticker_wrapper").css({
			"max-width" : "1150px",
			"margin" : "0 auto"
		});
		$("#footer").css({
			"max-width" : "1150px",
			"margin" : "0 auto",
			"display" : "block"
		});
		$("body").css({
			"background" : "none"
		});
	}
	
	smartphoneIntegration = function() {
		integration.base.setCfg({
			"plr_FastInit" : true,
			'plr_Responsive' : true,
			'plr_Fluid' : true,
			'plr_FluidAnchor' : true,
			'plr_Responsive' : true,
			'plr_ShowCloseButton' : true,
		});

			var headerHeight = $('.header').outerHeight();
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			integration.custom.FrameTop = e.data.plr_FrameTop + headerHeight;
			$("body").addClass("inskinLoaded");
			var stylesCSS = '<style id="inskinStyles" type="text/css">';
			stylesCSS += '.inskinLoaded #main_feature_image a img{min-height:auto}';
			stylesCSS += '.inskinLoaded .nav.is-open{top: ' + integration.custom.FrameTop + 'px !important; right: ' + integration.custom.FrameSideRight + 'px !important;}';
			stylesCSS += '</style>';
			$('head').append(stylesCSS);

			integration.on('adClose', function(e) {
				$('body').removeClass('inskinLoaded');
			});
	}
	
	tabletIntegration = function() {
		integration.base.setCfg({
			'plr_ContentW' : 1160,
			"plr_FastInit" : true,
			"plr_PageScanExclude" : ".sidebar, #ad-articlefooter, script"
		});

		$("#header_wrapper, #footer").css({
			"max-width" : "1160px"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.custom.isEdge = true;
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		} else {
			$("#header_wrapper, #footer").css({
				"margin" : "0 auto"
			});
		}

		integration.on('layoutChange', function(e) {
			integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
			if (integration.custom.isEdge) {
				$("body > div.wrapper, #footer").css({
					"margin-left" : "-" + integration.custom.PageSkinRightPanel + "px"
				});
			}
		});
	}
	
	if (e.data.device == "Desktop") {
		desktopIntegration();
	} else if (e.data.device == "Smartphone") {
		smartphoneIntegration();
	} else if (e.data.device == "Tablet") {
		tabletIntegration();
	}

});
