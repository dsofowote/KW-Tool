integration.meta = {
	'sectionID' : '128222',
	'siteName' : 'Here is the City - Smartphone - ( UK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '992483',
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
		var headHeight = $("#f-head").height();
		if ($("#f-head").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#f-head");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : 0,
				plr_ScrollAdjustment : -headHeight
			});
		}
		$("#inskinanchor").css({
			"top" : 0,
			"position" : "relative"
		});
		var wwidth = $(window).width();
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded, .inskinLoaded #s-head{min-width: 300px !important;}';
		stylesCSS += '.inskinLoaded #f-head{min-width: ' + wwidth + 'px !important;}';
		stylesCSS += '.inskinLoaded .post-header .share-box{margin: 10px 8px 10px 0;}';		
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 300);
	
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
