integration.meta = {
	'sectionID' : '127379',
	'siteName' : 'Nigella - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '716851',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.FrameTop = e.data.plr_FrameTop;
		var windowWidth = $(window).width();
		var contentWidth = windowWidth - integration.custom.FrameSideRight;
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .container.fixed-column{padding: 0px;}';
		stylesCSS += '.inskinLoaded main.container{padding:0px}';
		stylesCSS += '.inskinLoaded nav.main{margin-top: ' + integration.custom.FrameTop + 'px;}';
		stylesCSS += '.inskinLoaded .page-container{max-width: ' + contentWidth + 'px;}';
		stylesCSS += '.inskinLoaded .recipe.has-image.recipe-image{max-width: ' + (contentWidth - 20) + 'px; margin: 0 auto;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\n  googletag.pubads().definePassback('/3595/Nigella_Mobile/Inskins_MOB', [320, 50]).display();\n\n<\\script>";
};
