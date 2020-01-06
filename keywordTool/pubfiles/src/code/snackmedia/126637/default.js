integration.meta = {
	'sectionID': '126637',
	'siteName': 'NFL - Smartphone - (UK)',
	'platform': 'smartphone'
};

function setWindow() {
	return currentWindow.top;
}

integration.testParams = {
	'mobile_resolution': [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '708056',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_StartScrollOnAnchor': true,
	'plr_FastInit': true,
	"plr_Responsive": true,
	"plr_ShowCloseButton": true,
	"plr_PageHeightAdjustment": -48,
	'plr_StartScrollOnAnchor': true,
	'plr_CheckOptOut': true,
	'plr_ConsentString': "BOWPib9OWPib9AKABBENBxoAAAAiBzP0f62Op96z0v7FFmhGGgaMKfqbQgIMAEsvQATy5kgAfqE4wDBAycRDE0JCMERAKABABMgYoiEAkgiEghQAg5AKABgQ",
	'plr_PageScanExclude': ' .css-1ahlpki, #taboola-mobile-article, #content-35237387 '
};

integration.on("adClose", function (e) {
	$("html").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		if ($("#content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#content");
			integration.base.setCfg({
				"plr_AnchorParent": "#inskinanchor",
			});
		}
		if ($("#wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#wrap");
			integration.base.setCfg({
				"plr_AnchorParent": "#inskinanchor",
			});
		}
		console.log(e.data.format);
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		if (e.data.format !== "Pagelead Video" || e.data.format !== "Pagelead Video") {
			console.log("pageskin");
			stylesCSS += 'html.inskinLoaded {overflow:visible !important;}';
			stylesCSS += '#page-top-ad{display:none !important;}';
			stylesCSS += '.inskinLoaded .rmq-7a177422{padding-top:0px !important;}';
			stylesCSS += '.inskinLoaded iframe{max-width: 100% !important;}';
			stylesCSS += '.inskinLoaded [data-container-id*="home-page"] {overflow-x:hidden;}';
			stylesCSS += '.inskinLoaded {overflow:visible;}';
			stylesCSS += '.inskinLoaded [aria-live*="polite"] {position:relative;left:-20px;}';
			stylesCSS += '.inskinLoaded #page-footer [aria-live*="polite"] {position:relative;left:0px;}';
			stylesCSS += '.inskinLoaded #modal-carousel{overflow-x:hidden;}';
			stylesCSS += '.inskinLoaded .winners-widget {overflow-x: hidden;}';
			stylesCSS += '.inskinLoaded .post .list-matchup-row-tv {min-width: 2.5rem!important;}';
			stylesCSS += '.inskinLoaded .list-matchup-row-tv {min-width: 7rem!important;}';
		} else {
			stylesCSS += 'html.inskinLoaded {overflow:visible !important;}';
			stylesCSS += 'html.inskinLoaded .ism-anchor{z-index:10000 !important;}';
			stylesCSS += '.ism-indicator.ism-indicator-t.ism-open{margin-top:0px !important}';

			//Jquery DOM not accessible so using plain JS instead
			integration.custom.initScroll = true;
			//Creates style tag and sets initial positioning of Pagelead
			var plCSS = '<style id="inskinPL" type="text/css">';
			plCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_initState + 'px !important;}';
			plCSS += '</style>';
			$('head').append(plCSS);

			$(document).on('scroll', function () {
				//setTimeout(function () {
				integration.custom.pl_class = document.getElementsByClassName("page-header-transition-manager-container");
				integration.custom.elProperty = document.getElementsByClassName("page-header-transition-manager-container")[0].children[0].style.transform;
				integration.custom.elValue = "translateY(0px)";
				integration.custom.pl_scrollState1 = -48;
				integration.custom.pl_indState1 = -48;
				integration.custom.pl_closeState1 = -48;
				//console.log(integration.custom.pl_class, integration.custom.elProperty, integration.custom.elValue);
				if (integration.custom.initScroll) {
					if (integration.custom.elProperty !== integration.custom.elValue) {
						newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState1 + 'px !important;}';
						newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState1 + 'px !important;}';
						newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState1 + 'px !important;}';
						$("#inskinPL").html(newValue);
					} else {
						newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
						newValue += '.inskinLoaded .ism-indicator{margin-top:0px !important;}';
						newValue += '.inskinLoaded .ism-close{margin-top:0px !important;}';
						$("#inskinPL").html(newValue);
					}
				}
				//}, 100);
			});
		}
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function (e) {
	var headHeight = $(".links-container").outerHeight() + $(".page-navigation").outerHeight();
	$(".ism-frame").parent().css({
		"top": headHeight
	});
	integration.base.setCfg({
		plr_PageHeightAdjustment: -headHeight,
	});
});

integration.on('layoutChange', function (e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var header2 = $(".links-container").parent().next();

	$(header2).css({
		"max-width": windowWidth
	});

	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .links-container {max-width: ' + windowWidth + 'px}';
	stylesCSS += '.inskinLoaded [role*="radiogroup"] {max-width:' + contentWidth + 'px}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

});

integration.on('pagelead:layoutChange', function (e) {
	integration.custom.pl_behaviour = "property";
	integration.custom.pl_indState1 = integration.custom.headHeight;
	integration.custom.pl_indState2 = 0;
	integration.custom.pl_closeState1 = integration.custom.headHeight;
	integration.custom.pl_closeState2 = 0;
});

integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/NFL-320x50-2019-Mobile', [320, 50]).display();\n<\\script>";
};