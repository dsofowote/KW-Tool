integration.meta = {
	'sectionID' : '126924',
	'siteName' : 'Marie Claire - Smartphone - (HK) ',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708005',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 20,
	'plr_URLKeywords' : 2,
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration._addPixel($('html'));		
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
	 	stylesCSS += '.inskinLoaded #page{height:auto}';
		stylesCSS += '.inskinLoaded #main{position:relative !important}';
		stylesCSS += '.inskinLoaded .region-overlay{position:fixed}';
		stylesCSS += '.inskinLoaded .menu-on #header{margin-top:0px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;	

	var stylesCSS = '<style id="inskinStyles1" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	
	var stylesCSS = '<style id="inskinStyles2" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var newValue = ".inskinLoaded #header{max-width:" + contentWidth  + "px}";
	//Leaving space to close menu on iPhone 5 sized devices
	if (windowWidth < 321) {
		newValue += ".inskinLoaded #nav-menu{max-width:" + (contentWidth - 30) + "px}";
	}
	document.getElementById("inskinStyles1").innerHTML = newValue;
}

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		var newValue = ".inskinLoaded #header{margin-top:" + newheight + "px}";
		document.getElementById("inskinStyles2").innerHTML = newValue;
	} else {
		var newValue = ".inskinLoaded #header{margin-top:0px}";
		document.getElementById("inskinStyles2").innerHTML = newValue;
	}
};

integration.on("adClose", function(e) {
$("body").removeClass("inskinLoaded");
//$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<div data-glade data-ad-unit-path=\"/117295781/InSkin_MC(Tablet_Mobile)\" height=\"1\" width=\"1\"></div><script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>\n";
};