integration.meta = {
	'sectionID' : '127994',
	'siteName' : 'Cultura Inquieta - Smartphone - ( ES )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965312',
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
		var contentWidth = $(window).width() - integration.custom.FrameSideRight;
				$("body").addClass("inskinLoaded");
				var stylesCSS = '<style type="text/css">';
				stylesCSS += '.inskinLoaded button.ism-close{padding:0px; z-index:5;}';
				stylesCSS += '.inskinLoaded .ui-circle{left:-70px;}';
				stylesCSS += '.inskinLoaded .rstboxes .rstbox.rstbox_shd_1{box-shadow: 0 0 2px 2px rgba(0,0,1,.3) !important; -webkit-box-shadow: 0 -2px 2px -2px rgba(0,0,1,.3) !important;}';
				stylesCSS += '.inskinLoaded #rstbox_6{right:' + integration.custom.FrameSideRight + 'px !important;}';
				stylesCSS += '.inskinLoaded .rstboxes .rstbox.rstbox_bottom-right, .inskinLoaded .social{left:0px !important; width: ' + contentWidth + 'px !important;}';
				stylesCSS += '</style>'
				$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
    var headHeight = $("#gkHeader").height();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});


integration.on('layoutChange', function(e) {
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
		var newStyles = ".inskinLoaded .rstboxes .rstbox.rstbox_bottom-right, .inskinLoaded .social{margin-bottom:" + footermargin + "px !important;}";
	} else {
		var newStyles = ".inskinLoaded .rstboxes .rstbox.rstbox_bottom-right, .inskinLoaded .social{margin-bottom:0px !important;}";
	}
	document.getElementById("inskinStyles").innerHTML = newStyles
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});
