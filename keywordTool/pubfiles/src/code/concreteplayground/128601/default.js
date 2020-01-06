integration.meta = {
    'sectionID' : '128601',
    'siteName' : 'Concrete Playground - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1025389',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        integration.custom.ww = $(window).width();
        integration.custom.cw = integration.custom.ww - integration.custom.PageSkinRightPanel;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += 'html.inskinLoaded, .inskinLoaded body, .inskinLoaded .cp-page-home .cp-mobile {overflow: visible !important;}';
        stylesCSS += '.inskinLoaded .mobile-footer{width: ' + integration.custom.cw + 'px;}';
        stylesCSS += '.inskinLoaded .banner_1240x100.ad-banner.banner_1240x100_top{display:  none !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.InSkinBottomNav();

	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();

	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		var newStyles = ".inskinLoaded .mobile-footer{margin-bottom:95px !important;}";
	} else {
		var newStyles = ".inskinLoaded .mobile-footer{margin-bottom:0px !important;}";
	}

	document.getElementById("inskinStyles").innerHTML = newStyles
}


integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "top" : "82px",
        "z-index" : "15"
    });
});
integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/7836898/CP_1240x250', [[320, 50], [970, 250], [728, 90], [1240, 250], [1240, 100]]).display();\n<\\script>";
};
