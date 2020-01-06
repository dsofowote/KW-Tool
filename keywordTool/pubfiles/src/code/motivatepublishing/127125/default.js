integration.meta = {
	'sectionID' : '127125',
	'siteName' : 'Emirates Woman- Smartphone - (UAE) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707573',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".mobile_header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".mobile_header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -101
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .eng_widget_href{padding-bottom:90px !important;}';
		stylesCSS += '.inskinLoaded .at4m-dock-toggle{right:74px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);

		if ($(window).width() < 405) {
			var stylesCSS = '<style type="text/css">';
			stylesCSS += '.inskinLoaded .article-wrapper .left .article-content .ad-w{left: -15px;}';
			stylesCSS += '</style>'
			$('head').append(stylesCSS);
		}

		if ($(window).width() < 380) {
			var stylesCSS = '<style type="text/css">';
			stylesCSS += '.inskinLoaded .triangle-down{margin: 0 5px;}';
			stylesCSS += '</style>'
			$('head').append(stylesCSS);
		}

	}
});

integration.on('adServed', function(e) {
	var headheight = $('.mobile_header').outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : headheight
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});

	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
    integration.custom.InSkinBottomNav();
    $( document ).scroll(function() {
        integration.custom.InSkinBottomNav();
    });
});

integration.custom.laychange = function() {
	var socbtn = $('.at4m-dock-toggle').width();
	var wwidth = $(window).width();
	var cwidth = wwidth - integration.custom.FrameSideRight;
	var fwidth = cwidth - socbtn;
	var left = cwidth - 130;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #at4m-dock{width: ' + fwidth + ';}';
	stylesCSS += '.inskinLoaded .share-icon > div:nth-child(1){display: block; left: -' + left + 'px;}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
}

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel) - docheight;
        $("#at4m-dock, .at4m-dock-toggle").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#at4m-dock, .at4m-dock-toggle").css({
            "margin-bottom" : "0"
        });
    }
}

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
   $('#inskinanchor').remove();
});
