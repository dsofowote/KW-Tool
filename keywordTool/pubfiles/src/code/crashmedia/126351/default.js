integration.meta = {
	'sectionID' : '126351',
	'siteName' : 'Crash.net - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
};

integration.flaggedTests = [];

function setWindow() {
	return currentWindow.top;
};

integration.params = {
	'mf_siteId' : '707748',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_GetContentHeightVersion' : 1,
	'plr_FastInit' : true,
	"plr_Responsive" : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .col-thumb img{width:100%;}';
		stylesCSS += '.inskinLoaded .field-name-comment-body p:first-child, .inskinLoaded .view-display-id-latest_articles_block .views-row{overflow:hidden;word-wrap:break-word;}';
		stylesCSS += '.inskinLoaded #advert-banner-container, #jpx-is-wrapper{min-height:0px;padding:0px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = ".inskinLoaded #main #content{max-width:" + (contentWidth - 30) + "px;} .inskinLoaded #block-system-main{max-width:" + contentWidth + "px;}";
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/19006\"><\\script>";
};
