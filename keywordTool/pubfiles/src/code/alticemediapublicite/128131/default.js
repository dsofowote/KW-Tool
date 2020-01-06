integration.meta = {
   'sectionID' : '128131',
   'siteName' : 'SFR - Smartphone - ( FR )',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '980779',
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
      $('body').addClass('inskinLoaded');
   }
});

integration.on("layoutChange", function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    var sidewidth = integration.custom.FrameSideRight + 10;
    var width = $(window).width();
    var contentWidth = width - integration.custom.FrameSideRight;
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded #eTc2{right: ' + sidewidth + 'px!important;}';
    stylesCSS += '.inskinLoaded #CkC, .inskinLoaded .home-stack__secondary.parallax-view__element{width: ' + contentWidth + 'px !important;}';
    stylesCSS += '@media screen and (max-width: 405px) {.inskinLoaded .bouton--L{padding: 0 9px !important; font-size: 15px;}}';
    stylesCSS += '</style>'
    $('head').append(stylesCSS);
    var stylesCSS2 = '<style id="inskinStyles" type="text/css">';
    stylesCSS2 += '</style>'
    $('head').append(stylesCSS2);
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
		var newStyles = ".inskinLoaded #eTc2{margin-bottom:" + footermargin + "px !important;}";
	} else {
		var newStyles = ".inskinLoaded #eTc2{margin-bottom:0px !important;}";
	}
	document.getElementById("inskinStyles").innerHTML = newStyles
}

integration.on('adServed', function(e) {
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   setTimeout(function() {
       window.dispatchEvent(new Event('resize'));
   }, 250);
});
