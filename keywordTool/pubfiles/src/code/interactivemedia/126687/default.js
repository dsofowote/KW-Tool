integration.meta = {
	'sectionID' : '126687',
	'siteName' : 'Petra - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '706953',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true,
	"plr_PageHeightAdjustment" : -80
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var headerHeight = $('.header').height();
		if ($("body > .sub-navigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("body > .sub-navigation");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"margin-top" : "80px"
	});
	$(".inskinLoaded header.header").css({
		"z-index" : "10000"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .searchbox{z-index: 99;} @media screen and (max-width: 375px){.inskinLoaded .term-description{width: 100%; display: inline-block;}}';
	stylesCSS += '.inskinLoaded .share-buttons-navi{z-index: 99; padding: 0;}';
	stylesCSS += '.inskinLoaded{width: calc(100% - ' + integration.custom.FrameSideRight + 'px); overflow: visible !important;}';
	stylesCSS += '.inskinLoaded .share{width: calc(100% - ' + integration.custom.FrameSideRight + 'px); }';
	stylesCSS += 'html{padding:0px !important}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});
