integration.meta = {
	'sectionID' : '127079',
	'siteName' : 'AT5 - Smartphone - (NL)',
	'platform' : 'smartphone'
};

integration.async = false;

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707421',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ServePassbackInIframe' : false
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#page-at5 > div.container > div.push > div").length == 1) {
			$("#page-at5 > div.container > div.push > div").prepend("<div id='inskinanchor'></div>");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -80,
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	var wwidth = $(window).width();
	$('body').addClass('inskinLoaded')
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .header-container{width: calc(100% + ' + integration.custom.PageSkinRightPanel + 'px);} .inskinLoaded .container{overflow: visible;}';
	stylesCSS += '.inskinLoaded #at5-mobile, .inskinLoaded .widget.widget-advertisement.advertisement.top, .inskinLoaded .advertisement-mobile{height: 0;}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	$('a.toggle-menu').on('click', function() {
		console.log('raboti wa');
		setTimeout(function() {
			if ($('header').hasClass('active') && $('body').hasClass('inskinLoaded')) {
				$('.container').css({
					"overflow" : "hidden",
					"width" : "calc(100% + 74px)"
				});
			} else {
				$('.container').css({
					"overflow" : "visible",
					"width" : "100%"
				});
			}
		}, 100);
	});
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">    document.write('<scr' + 'ipt src=\"https://ad.360yield.com/default?li=245139&w=320&h=240&ic='+ (window.tokuslid_ic_320x240 || '') + '&sb='+ (window.tokuslid_sb_320x240 || '') + '&gd='+ (window.tokuslid_gd_320x240 || '') +  '\">'+ '</scr' + 'ipt>');<\\script>";
};
