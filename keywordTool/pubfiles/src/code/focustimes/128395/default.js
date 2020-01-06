integration.meta = {
	'sectionID' : '128395',
	'siteName' : 'FocusTimesHK - Smartphone - (HK)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008688',
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

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		var contentWidth = $(window).width() - integration.custom.FrameSideRight - 20;
		var docHeight = $("#outer-wrapper").height() + integration.custom.PageSkinTopPanel - 400;
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #outer-wrapper{position: relative;}';
		stylesCSS += '.inskinLoaded #mainContainer, .inskinLoaded #mainContainer2, .inskinLoaded #content, .inskinLoaded #content2, .inskinLoaded #adContainer, .inskinLoaded #adContainer2, .inskinLoaded #contentElement, .inskinLoaded #contentElement2, .inskinLoaded .youtube_iframe {width: ' + contentWidth + 'px;}';
		stylesCSS += 'body.inskinLoaded {background-image: none; height: ' + docHeight + 'px;}';
		if ( $(".blog_featured_posts").css('display') == 'inline-block' ){
			stylesCSS += '.inskinLoaded #outer-wrapper{top: -496px;}';
			integration.base.setCfg({
				plr_PageHeightAdjustment : -496
			});
		} else {
			stylesCSS += '.inskinLoaded #outer-wrapper{top: -482px;}';
			integration.base.setCfg({
				plr_PageHeightAdjustment : -482
			});
		}
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	var contentWrapperPadding = $("#content-wrapper").css("padding-left");
	$("head").append("<style>.inskinLoaded div[class^='af_space']{margin-left: -" + contentWrapperPadding + ";}</style>");
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
