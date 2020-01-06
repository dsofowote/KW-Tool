integration.meta = {
	'sectionID' : '127360',
	'siteName' : 'Kuechengoetter - Smartphone - (DE)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '714230',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -90,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #main{margin-top: 10px;} .inskinLoaded #content{margin-top: 15px;} .inskinLoaded #header-extention{top: 0;} .inskinLoaded .upper-header{height: 68px;}';
		stylesCSS += '@media screen and (max-width: 350px){.inskinLoaded #footer .first-section .social-buttons {width: 130px;} .inskinLoaded #footer{margin-left: 0; margin-right: 0; padding: 0;}};';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
		$("#ad-pres").hide();
	}
});

integration.on('adServed', function(e) {
	var headHeight = $('header').outerHeight();
	$(".ism-frame").parent().css({
		"margin-top" : headHeight
	});
	$('.thumbnails-slider').find('.slick-next').trigger('click');
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});
