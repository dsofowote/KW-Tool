integration.meta = {
	'sectionID' : '126785',
	'siteName' : 'Staragora - Smartphone - (FR)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707959',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -60
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .SocialNetwork-wrapper{zoom: 0.8;} .inskinLoaded .SocialNetwork{margin-left: 0; margin-right: 0;}'; 
		stylesCSS += '.inskinLoaded .External.External--top-2{margin-bottom: 0px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adServed', function(e) {
	var headh = $('.SiteHeader-contentContainer').outerHeight();
	$(".ism-frame").parent().css({
		"top" : headh
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSideTop = e.data.plr_FrameTop;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var wheight = $(window).height();
	var artimg = $('.ArticleLink-image').width();
	var cont = wwidth - integration.custom.FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded, .inskinLoaded .BodyContent, .inskinLoaded article{max-width: 100%;}';
	stylesCSS += '.inskinLoaded #body{margin-top: 10px}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	//For constraining article links
	var links = cont - (artimg / 3);
	$(".NewsletterBox-emailAddressField").css({
		"max-width" : links
	});
	if (wwidth > wheight) {
		//Landscape Mode
		$(".ArticleLink--standard.ArticleLink--small").css({
			"width" : initial - 10
		});
	} else {
		//Portrait Mode
		$(".ArticleLink--standard.ArticleLink--small").css({
			"width" : links + 30
		});
	}
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

