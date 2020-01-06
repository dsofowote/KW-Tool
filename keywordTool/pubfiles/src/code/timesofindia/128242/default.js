integration.meta = {
	'sectionID' : '128242',
	'siteName' : 'Times of India - Smartphone - (MENA)  ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '993846',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".clearfix.navouter").length == 1) {
			var header = $("header.header.clearfix").parent();	
		} else {
			var header = $("header.header.clearfix");
		}
		
		var headerHeight = $("header.header.clearfix").height();
		var scrollAdjust = 0;
		if ($(".article_outer").length == 0) {
			headerHeight += $(".clearfix.el_navouter").height();
		} else {
			scrollAdjust = headerHeight;
		}

		if ($("header.header.clearfix").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(header);
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_ScrollAdjustment : scrollAdjust
			});
		}

		var wwidth = $(window).width();
		var mpuLeft = parseInt($(".article-txt").css("padding-left"));
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var shareRight = integration.custom.FrameSideRight + 15;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded header.header.clearfix, .inskinLoaded .clearfix.el_navouter, .inskinLoaded .live_video.clearfix{width: ' + wwidth + 'px !important;}';
		stylesCSS += '.inskinLoaded .article_outer .social-icons ul li{margin-right: 1%;}';
		stylesCSS += '.inskinLoaded div[id^="div-gpt"], .inskinLoaded .NativeInarticle, .inskinLoaded .ad1.NativeInarticle{margin-left: -' + mpuLeft + 'px !important;}';
		stylesCSS += '.inskinLoaded .icons{right: ' + shareRight + 'px !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
}); 