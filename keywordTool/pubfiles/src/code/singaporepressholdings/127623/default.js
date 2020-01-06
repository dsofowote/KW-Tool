integration.meta = {
	'sectionID' : '127623',
	'siteName' : 'The Peak - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768230',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	"plr_FixedCloseButton" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded ul.cb-country-links{width: 101%;}';
		stylesCSS += '.inskinLoaded .footer-icons{width: 240px; !important}';
		stylesCSS += ' @media screen and (max-width: 374px){ .inskinLoaded #logo{margin-bottom: 35px !important;}}';
		stylesCSS += '.inskinLoaded #cb-top-menu{margin-bottom: 15px;}';
		stylesCSS += '.inskinLoaded div[id^="text"]{overflow: visible;}';
		stylesCSS += '.inskinLoaded #peak-gpt-ad-mpu, .inskinLoaded div[id^="google_ads_iframe"]{min-width: 300px; margin-left: -10px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		
		$("head").append("<style id='inskinStyles'></style>");
	}
});

integration.on('layoutChange', function() {
	$(document).on("scroll", function() {
		integration.custom.fcb();
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var cwidth = $(window).width() - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded .backstretch img{max-width: " + cwidth + "px !important; height: auto !important;}</style>");
	$("head").append("<style>.inskinLoaded .backstretch{max-width: " + cwidth + "px !important; height: auto !important; position: static !important;}</style>");
	$("head").append("<style>.inskinLoaded #cb-full-width-featured-img{max-width: " + cwidth + "px !important;}</style>");

	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.custom.fcb = function() {
	//Checks layout & if sticky nav is present
	var headerCheck = $("body.cb-tm-stuck header").length;
	var navHeight = $(".cb-top-menu-wrap").outerHeight();
	var newValue = 'body.inskinLoaded{padding-right:0px !important}';
	//var forumPage = $(".bodywrapping").length;

	if (headerCheck == 1) {
		integration.base.setCfg({
			plr_ScrollAdjustment : 45
		});
	} else {
		integration.base.setCfg({
			plr_ScrollAdjustment : 0
		});
	}

	document.getElementById("inskinStyles").innerHTML = newValue;
}
integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
