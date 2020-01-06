integration.meta = {
	'sectionID' : '127016',
	'siteName' : 'Gumtree- Smartphone - (AU) ',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

function setWindow() {
    return currentWindow.top;
  }

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '708145',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20,
	'plr_FastInit' : true,
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var leftPanel = $(window).width() - integration.custom.FrameSideRight;
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .header__banner-container {min-height:0px !important}';
		stylesCSS += '.inskinLoaded {overflow-x:hidden}';
		stylesCSS += '@media screen and (max-width: 395px) {.inskinLoaded .container{min-width: 300px !important; padding: 0 !important;}}';
		stylesCSS += '.inskinLoaded #header-new {z-index:30}';
		stylesCSS += '.inskinLoaded .bx-wrapper .bx-viewport ul li {max-width:'+ leftPanel +'px}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	var topFrame0 = ($(".header__home-hero").height() - $(".header__home-hero-placement").height())/2;
	var topFrame2 = $(window).height() - $(".footer").outerHeight();
		stylesCSS += '.inskinLoaded .gallery__img-wrap img{width: calc(100% - '+ (integration.custom.FrameSideRight - 20) +'px) !important; margin: 0 !important;}';

		//competing ads above inskin:
		$("#google_ads_iframe_/30720440/home_2").wrap("<div class='frameWrapper'></div>");
	//frame at the top:	stylesCSS += '.inskinLoaded .header__home-hero-placement {top: 70% !important; position: absolute !important;}';
		stylesCSS += '.inskinLoaded .container--full-width iframe { margin-top: -25px; position: absolute !important; z-index: 3; left:0}';
		//end GoogleActiveViewClass

		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).resize(function() {
		integration.custom.laychange();
	});
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().addClass("inskinanchor");
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	var newValue = ".inskinLoaded .gallery__img-wrap img, .inskinLoaded .gallery__main-viewer-item{min-width: " + contentWidth + "px;max-width: " + contentWidth + "px;}";
	newValue = "body.inskinLoaded, .inskinloaded .container{max-width:" + contentWidth + "px !important;min-width:" + contentWidth + "px !important}";
	document.getElementById("inskinStyles").innerHTML = newValue;
}
/* Passback Tag */
window.ISMPassback = function() {
	return "<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'><\\script>\n<script>\n  var gptadslots = [];\n  var googletag = googletag || {cmd:[]};\n<\\script>\n<script>\n  googletag.cmd.push(function() {\n    //Adslot 1 declaration\n    gptadslots.push(googletag.defineSlot('/30720440/inskin/smartphone', [[320,50]], 'div-gpt-ad-6551844-1')\n                             .addService(googletag.pubads()));\n\n    googletag.pubads().enableSingleRequest();\n    googletag.enableServices();\n  });\n<\\script>";
};
