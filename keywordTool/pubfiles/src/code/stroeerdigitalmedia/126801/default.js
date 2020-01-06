integration.meta = {
    'sectionID': '126801',
    'siteName': 'RunnersWorld - Smartphone - (AT CH DE)',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707705',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var wWidth = $(window).width();
        var cWidth = wWidth - integration.custom.FrameSideRight;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow-x: visible;} .inskinLoaded #nav1, .inskinLoaded #nav2, .inskinLoaded #nav3{zoom: 0.8; top: 7px; position: relative;}';
        stylesCSS += '.inskinLoaded .at-share-dock{max-width:' + cWidth + 'px;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS)
    }
});

integration.on("layoutChange", function(e) {
      	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
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
      		var footermargin = (winheight + scrolltop + integration.custom.PageSkinBottomPanel ) - docheight;
      		var newStyles = ".inskinLoaded .at-share-dock{margin-bottom:" + footermargin + "px !important;}";
      	} else {
      		var newStyles = ".inskinLoaded .at-share-dock{margin-bottom:0px !important;}";
      	}
      	document.getElementById("inskinStyles").innerHTML = newStyles
}


integration.on('adServed', function(e) {
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 100);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
