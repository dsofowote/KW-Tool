integration.meta = {
	'sectionID' : '128236',
	'siteName' : 'HITC - Desktop - (UK)',
	'platform' : 'header bidding'
};

integration.params = {
	'mf_siteId' : '993522',
	'plr_PageAlignment' : 'center',
	'plr_UseFullVersion' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'srv_SectionID' : '128236',
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseCreativeSettings' : true,
	'plr_Multiwin' : false,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		desktopIntegration = function() {
			console.log("desktop");
			integration.base.setCfg({
				"plr_ContentW" : 1200,
				"plr_PageAlignment" : "center",
				"plr_HideElementsByID" : "[id^=div-gpt-ad]",
				"plr_HideElementsByClass" : "la-wrapper, ma ",
				"plr_FastInit" : true,
				'plr_URLKeywords' : 2
			});

			$("html.has-skin body").css({
				"overflow" : "initial"
			});
			$("html").css({
				"overflow-y" : "visible"
			});

			$("#content").css({
				"margin-top" : "20px"
			});

			$("#s-head, #container").css({
				"max-width" : "1200px",
				"margin" : "auto"
			});

			$("#s-head").css({
				"position" : "relative"
			});
			/*
			$("#ss-wrapper").css({
				"position" : "relative",
				"margin-top" : e.data.frameSideRight,
				"height" : "0px",
				"top" : "0px"
			});
			*/
			$("#main").css({
				"padding-top" : "0px"
			});

			integration.on('adServed', function(e) {
				//var hh = $("#f-head").outerHeight();
				integration.custom.frameTop = e.data.frameTop;

				$(".ism-frame").css({
					"margin-top" : hh
				});

			});
		}
		smartphoneIntegration = function() {
			integration.base.setCfg({
				'plr_FluidAnchor' : true,
				'plr_Fluid' : true,
				'plr_Responsive' : true,
				'plr_ShowCloseButton' : true,
				'plr_ContentType' : 'PAGESKINEXPRESS',
				'plr_UseFullVersion' : true,
				'plr_UseCreativeSettings' : true,
				'plr_HideElementsByID' : '',
				'plr_HideElementsByClass' : '',
				'plr_FastInit' : true
			});

			var ww = $(window).width();

			$("#main").css({
				"overflow-x" : "hidden"
			});

			var headHeight = $("#s-head").height();
			if ($("#s-head").length == 1) {
				$("<div id='inskinanchor'></div>").insertAfter("#s-head");
				integration.base.setCfg({
					plr_AnchorParent : "#inskinanchor",
					plr_PageHeightAdjustment : 0
				});
			}
			$("#inskinanchor").css({
				"top" : headHeight,
				"position" : "relative"
			});
			/*
			$("#ss-wrapper").css({
				"position" : "relative",
				//"margin-top" : e.data.frameSideRight,
				"height" : "0px",
				"top" : "0px"
			});
			*/
			$("#main").css({
				"padding-top" : "0px"
			});
			
			var ww = $(window).width();
			var cw = ww - e.data.frameSideRight;
			$('body').addClass('inskinLoaded');
			var stylesCSS = '<style type="text/css">';
			stylesCSS += '.inskinLoaded #s-head{min-width:' + ww + 'px !important;}';
			stylesCSS += '.inskinLoaded #content{min-width:' + cw + 'px !important;}';
			stylesCSS += '</style>'
			$('head').append(stylesCSS);

			integration.on('layoutChange', function(e) {
				setTimeout(function() {
					window.dispatchEvent(new Event('resize'));
				}, 300);
			});

			integration.on('adClose', function(e) {
				$('body').removeClass('inskinLoaded');
			});
		}
		tabletIntegration = function() {
			integration.base.setCfg({
				//"plr_Responsive" : true,
				"plr_ContentW" : 1200,
				"plr_PageAlignment" : "center",
				"plr_HideElementsByID" : "",
				"plr_HideElementsByClass" : "",
				"plr_FastInit" : true,
				'plr_URLKeywords' : 2
			});

			$("#content").css({
				"margin-top" : "20px"
			});

			$("html.has-skin body").css({
				"overflow" : "initial"
			});
			$("html").css({
				"overflow-y" : "visible"
			});
			$("#s-head, #container").css({
				"max-width" : "1200px",
				"margin" : "auto"
			});
			$("#ss-wrapper").css({
				"position" : "relative",
				"margin-top" : e.data.frameSideRight,
				"height" : "0px",
				"top" : "0px"
			});

			$("#s-head").css({
				"position" : "relative"
			});

			$("#main").css({
				"padding-top" : "0px"
			});

			integration.on('adServed', function(e) {
				//var hh = $("#f-head").outerHeight();
				integration.custom.frameTop = e.data.frameTop;

				$(".ism-frame").css({
					"margin-top" : hh
				});

			});

			integration.custom.orientationNotify = function() {
				$('body').addClass("PageSkinDisplayed");
				$(window).bind('orientationchange', function() {
					orientationChanged();
				});
				orientationChanged();
			}

			integration.custom.orientationChanged = function() {
				switch(window.orientation) {
				case -90:
				case 90:
					$('body').addClass("PageSkinLandscape");
					$('body').removeClass("PageSkinPortrait");
					break;
				default:
					$('body').addClass("PageSkinPortrait");
					$('body').removeClass("PageSkinLandscape");
					break;
				}
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
