integration.meta = {
	'sectionID' : '126671',
	'siteName' : 'Il Messagero - Smartphone - (IT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707536',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('header').height();
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -50,
			});
			$('#inskinanchor').css({
				"margin-top" : headerHeight
			});
		}
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body{width: auto;}';
		stylesCSS += '.inskinLoaded .share_content li{width: 20%;}';
		stylesCSS += '.inskinLoaded section.container{padding: 0 5px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight;
	integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
	var windowWidth = $(window).width();
	var windowWidth2 = windowWidth - integration.custom.PageSkinSidePanel;
	$("head").append("<style>.inskinLoaded body{overflow-x: visible;}</style>");
	$("head").append("<style>.inskinLoaded .mm-menu{z-index: 1;}</style>");
	$("head").append("<style>.inskinLoaded div.sharefix > section{width: " + windowWidth2 + "px; left: 0; right: auto;}</style>");
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
	integration.custom.ismResize();
	$(window).on('resize', function() {
		integration.custom.ismResize();
	});

});

integration.custom.ismResize = function() {
	var windowWidth = $(window).width();
	var windowWidth2 = windowWidth - integration.custom.PageSkinSidePanel;
	$("head").append("<style>.inskinLoaded #hp-fixed{width: " + windowWidth2 + "px;}</style>");
}

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "\"<script src='https://www.googletagservices.com/tag/js/gpt.js'>\\ngoogletag.pubads().definePassback('/38681514/Messaggero/HomePage/IntropageOvl').display();\\n<\\\\script>\"";
};
