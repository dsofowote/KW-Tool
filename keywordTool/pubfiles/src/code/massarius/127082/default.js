integration.meta = {
	'sectionID' : '127082',
	'siteName' : 'Beautylab - Smartphone - ( NL )',
	'platform' : 'smartphone'
};

integration.async = false;

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707775',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded{margin-top: 54px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS)
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=245191&w=320&h=240&ic='\n+ (window.tokuslid_ic_320x240 || '') + '&sb='\n+ (window.tokuslid_sb_320x240 || '') + '&gd='\n+ (window.tokuslid_gd_320x240 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>\n";
};
