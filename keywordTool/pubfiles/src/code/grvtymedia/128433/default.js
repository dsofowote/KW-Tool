integration.meta = {
	'sectionID' : '128433',
	'siteName' : 'Vulcan Post - Smartphone - ( MY SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013251',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($("#masthead").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#masthead");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -63,
			});
		}

		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .wrapper{width:100%; overflow:visible;}';
		stylesCSS += '.inskinLoaded .mobile-nav-menu{width:calc(100% - ' + integration.custom.FrameSideRight + 'px);}';
		stylesCSS += '.inskinLoaded #main{overflow:visible; padding-top:0px !important;}';
		stylesCSS += '.inskinLoaded .single .also_read{width: 100%;}';
		stylesCSS += '.inskinLoaded .post-after-entry.full{padding:0px;}';
		stylesCSS += '.inskinLoaded .ism-close{padding:0px !important;}';
		stylesCSS += '.inskinLoaded #mobileMenu.active{z-index:100}';
		stylesCSS += '.inskinLoaded .social-icons{}';
		//  stylesCSS += 'html.inskinLoaded {overflow-x:visible !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
		$("#inskinanchor").css({
			"padding-top" : "60px"
		});

		$("html.inskinLoaded").css({
			"transition" : "transform .2s ease"
		});

		$(".menuToggle").on("click", function() {
			if ($("body.menuOpen").length >= 1) {
				$("html").css({
					"padding-right" : "0px"
				});
			} else {
				$("html").css({
					"padding-right" : "75px"
				});
			}
		});
	}
});

integration.on("adServed", function(e) {
	window.dispatchEvent(new Event('resize'));
	$(".ism-frame").parent().css({
		"z-index" : "10000"
	});
})

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	window.dispatchEvent(new Event('resize'));
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\tgoogletag.pubads().definePassback('/39635364/Vulcanpost_Interstitials', [1, 1]).display();\n<\\script>";
};
