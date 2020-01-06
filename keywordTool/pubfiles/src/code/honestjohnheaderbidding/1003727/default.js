integration.meta = {
	'sectionID' : '128328',
	'siteName' : 'Honest John Header Bidding - (All Devices) - Desktop - ( UK )',
	'platform' : 'header bidding'
};

integration.params = {
	'mf_siteId' : '1003727',
	'plr_PageAlignment' : 'center',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'srv_SectionID' : "128328",
	'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		desktopIntegration = function() {
			console.log("int desk fired");
			integration.base.setCfg({
				'plr_ContentW' : 1002,
				'plr_HideElementsByID' : 'banner',
				'plr_HideElementsByClass' : '',
				'plr_URLKeywords' : 2
			});
		}
		smartphoneIntegration = function() {
			console.log("int smart fired");
			integration.base.setCfg({
				"plr_Responsive" : true,
				"plr_FluidAnchor" : true,
				"plr_Fluid" : true
			});

			$("body").addClass("inskinLoaded");
			var stylesCSS = '<style type="text/css">';
			stylesCSS += '.inskinLoaded #page_content{padding-top:20px;}';
			stylesCSS += '.inskinLoaded #page_header{position:relative;}';
			stylesCSS += '.inskinLoaded .toptenMainImage{margin-top@50px;}';
			stylesCSS += '.inskinLoaded .reviewImagesBottom.toptenThumbs{margin-left:6px;}';
			stylesCSS += '</style>'
			$('head').append(stylesCSS);

			integration.on('layoutChange', function(e) {
				integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
				integration.custom.laydetect();
				$("head").append("<style>.inskinLoaded #menuButton{left:auto;}</style>");

				$(window).on('resize', function() {
					integration.custom.laydetect();
				});
			});

			integration.custom.laydetect = function() {
				/*Ensuring gallery fits within content*/
				var wwidth = $(window).width();
				var wheight = $(window).height();
				var wcontent = wwidth - integration.custom.FrameSideRight
				var gal1 = $(".toptenThumbNumber").width();
				var galwidth = wcontent - gal1;

				if (wwidth > wheight) {
					$("head").append("<style>.inskinLoaded .reviewImagesBottom.toptenThumbs{width: " + galwidth + "px;}</style>");
				} else {
					$("head").append("<style>.inskinLoaded .reviewImagesBottom.toptenThumbs{width: " + galwidth + "px;}</style>");
				}
			}
			integration.on("adClose", function(e) {
				$("body").removeClass("inskinLoaded");
				//$("#inskinanchor").remove();
			});
		}
		tabletIntegration = function() {
			console.log("int tab fired");
			integration.base.setCfg({
				'plr_ContentW' : 1002,
				'plr_FastInit' : true
			});

			$("body").css({
				"background-image" : "none"
			});

			/* format the site for PageSkin Edge */
			if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
				$("#page_template").css({
					"margin-left" : "1px"
				});
				$("#header_bar_inner").css({
					"margin-left" : "1px"
				});
				integration.base.setCfg({
					plr_PageAlignment : "left"
				});
			} else {
				$('head').append('<style type="text/css"> #page_template {margin:0 auto !important;}</style>');
			}
		}
		if (e.data.device == "Desktop") {
			desktopIntegration();
		} else if (e.data.device == "Smartphone") {
			smartphoneIntegration();
		} else if (e.data.device == "Tablet") {
			tabletIntegration();
		}
	}
});
