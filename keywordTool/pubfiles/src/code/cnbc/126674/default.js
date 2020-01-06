integration.meta = {
	'sectionID' : '126674',
	'siteName' : 'CNBC - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '707782',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50,
	'plr_Responsive' : true,
	"plr_ShowCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#cnbc-new-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#cnbc-new-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html {width: auto !important;}';
		stylesCSS += 'html, .inskinLoaded {overflow:visible;}';
		stylesCSS += '.inskinLoaded .loading-options {width: 100%;}';
		stylesCSS += '.inskinLoaded .featuredPromo {height:auto;}';
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var cwidth = $(window).width() - integration.custom.FrameSideRight;
		stylesCSS += '.inskinLoaded #social-tools-panel{max-width: ' + cwidth + 'px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .newsletter a, #social-tools-panel {width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px);}';
	stylesCSS += '.inskinLoaded #social-tools-panel{left:initial !important; right:';
	stylesCSS += integration.custom.PageSkinRightPanel;
	stylesCSS += "px !important;z-index:999999;}</style>";
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
});

integration.on('adServed', function(e) {
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #cnbc-new-header{z-index: 999999}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
});

integration.on('layoutChange', function(e) {
	integration.custom.laychange();
	integration.custom.style3
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += integration.custom.style3;
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	$(window).on('resize', function() {
		integration.custom.laychange();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		integration.custom.style3 = '.inskinLoaded #cnbc-new-header, .inskinLoaded .newsletter a{max-width: calc(100% - ' + integration.custom.FrameSideRight + 'px)}';
		document.GetElementById("inskinStyles").innerHTML = integration.custom.style3;
	});
});

integration.on('adClose', function(e) {
	$("body").removeClass("inskinLoaded");
});

/* Passback Tag */
window.ISMPassback = function() {
	return " <div data-glade id='glade-aslot-1'\n           data-ad-unit-path='/342329058/Inskin'\n    width='320' height='50'\n  data-click-url='%%CLICK_URL_UNESC%%'></div>\n<script async src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
}; 