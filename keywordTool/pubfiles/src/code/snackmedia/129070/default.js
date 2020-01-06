integration.meta = {
    'sectionID' : '129070',
    'siteName' : 'NFL.com - (NO SPIRITS) - Smartphone (Non HP) - ( UK IE )',
    'platform' : 'smartphone'
};

function setWindow() {
return currentWindow.top;
}

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1047357',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_PageHeightAdjustment" : -48,
	'plr_StartScrollOnAnchor' : true,
	'plr_CheckOptOut' : true,
	'plr_ConsentString' : "BOWPib9OWPib9AKABBENBxoAAAAiBzP0f62Op96z0v7FFmhGGgaMKfqbQgIMAEsvQATy5kgAfqE4wDBAycRDE0JCMERAKABABMgYoiEAkgiEghQAg5AKABgQ",
	'plr_PageScanExclude' : ' .css-1ahlpki, #taboola-mobile-article, #content-35237387 '
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#content").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#content");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
			});
		}
		if ($("#wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#wrap");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
			});
		}

	}
});

integration.on("adClose", function(e) {
	$("html").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
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
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
		var headHeight = $(".links-container").outerHeight() + $(".page-navigation").outerHeight();
		 $(".ism-frame").parent().css({
			 "top" : headHeight
		 });
		 integration.base.setCfg({
			 plr_PageHeightAdjustment : -headHeight,
		 });
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var header2 = $(".links-container").parent().next();

	$(header2).css({
		"max-width" : windowWidth
	});

	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .links-container {max-width: ' + windowWidth + 'px}';
	stylesCSS += '.inskinLoaded [role*="radiogroup"] {max-width:' + contentWidth + 'px}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$('#inskinanchor').remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6428571/NFL-320x50-2019-Mobile', [320, 50]).display();\n<\\script>";
};
