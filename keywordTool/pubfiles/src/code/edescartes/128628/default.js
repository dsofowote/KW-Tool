integration.meta = {
    'sectionID' : '128628',
    'siteName' : 'Tagmum - Smartphone - ( HK )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1027576',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 250);
        integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
        var wwidth = $(window).width();
        var cwidth = wwidth - integration.custom.PageSkinRightPanel;
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #totop{right: ' + (integration.custom.PageSkinRightPanel + 10) + 'px!important;}';
        stylesCSS += '.inskinLoaded #home-article-slider li{width: calc( ' + cwidth + 'px - 52px) !important;}';
        stylesCSS += '@media only screen and (max-width: 395px){.inskinLoaded .ads-box.ads-300{margin-left: -15px;}}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
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
		var newStyles = "#totop{margin-bottom:" + footermargin + "px !important;}";
	} else {
		var newStyles = "#totop{margin-bottom:0px !important;}";
	}
	document.getElementById("inskinStyles").innerHTML = newStyles
}


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});
