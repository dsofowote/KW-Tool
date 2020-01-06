integration.meta = {
    'sectionID' : '128866',
    'siteName' : 'Nigella - Smartphone - (INT)',
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
    'mf_siteId' : '1038826',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
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
		stylesCSS += '.inskinLoaded .page-container, .inskinLoaded .fixed-ad-container>.main{max-width: ' + contentWidth + 'px;}';
		stylesCSS += '.inskinLoaded .recipe.has-image.recipe-image{max-width: ' + (contentWidth - 20) + 'px; margin: 0 auto;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "999999"
	});
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"//get.s-onetag.com/be68faf4-3729-4e91-bfa1-fe86d6857230/tag.min.js\" async defer><\\script>";
};
