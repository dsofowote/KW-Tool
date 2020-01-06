integration.meta = {
	'sectionID' : '127997',
	'siteName' : 'Bild der Frau - Smartphone - ( DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965315',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var headerHeight = $('.header-top').height();
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded {margin-top: ' + (headerHeight + 22) + 'px !important;}';
		stylesCSS += '.inskinLoaded .page-wrapper .article__header .socialbar .share-button{margin-right: 12px !important;}';
		stylesCSS += '.inskinLoaded .main{margin-top: 0 !important;} .inskinLoaded .header{z-index: 99;}';
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .main{padding: 8px 5px 0px !important;}}';
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .content-wide__column .nav-meta.desktop{width: 90% !important;}}';
		stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .content--teaser--container.newsletter-form-rezepte:not(#newsletter-rezept).footer-newsletter{width: calc(96vw - 18px) !important; padding: 18px 35px 0px !important;}}';
		stylesCSS += '.inskinLoaded .article div[id^="mrec"], .inskinLoaded .content-triple.first-triple.has-halfpage div[id^="mrec"], .inskinLoaded #mrec_btf{margin-left: -6px !important;}';
		stylesCSS += '.inskinLoaded .content-wide__column li:nth-child(n+6){margin-left: 6px; margin-right: 6px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .full-width, .inskinLoaded .full-width-footer{width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}';
	stylesCSS += '.inskinLoaded a.scrollup{right: ' + integration.custom.FrameSideRight + 'px !important;}';
	stylesCSS += '.inskinLoaded .swiper-container-outer.autoloop .swiper-wrapper .swiper-slide .hero-media__caption{width: 100% !important;}';
	stylesCSS += '.inskinLoaded div.article--sticky{width: calc(100% - ' + integration.custom.FrameSideRight + 'px)!important; padding: 7px 0 !important;}';
	stylesCSS += '.inskinLoaded .content--teaser--container.newsletter-form-rezepte:not(#newsletter-rezept).footer-newsletter{width: calc(100vw - ' + integration.custom.FrameSideRight + 'px);}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);

});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});
