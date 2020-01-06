integration.meta = {
	'sectionID' : '128287',
	'siteName' : 'Holland Media Combinatie - Desktop - ( NL )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1000304',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 990,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ServePassbackInIframe' : true,
	'plr_PassbackIframeStyle' : "width:0%;height:0%;"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".appbody").css({
			"margin-top" : "0px"
		});
	}
});

integration.on('adServed', function(e) {
	var ah = $(".appheader").outerHeight();
	$(".ism-frame").parent().css({
		"top" : ah
	});
	$("#app").css({
		"top" : ah,
		"position" : "relative"
	});
}); 

/* Passback Tag */
window.ISMPassback = function() {
    return "<script id='ism-test-pb' type=\"text/javascript\">\n\n\n    document.write(\n'<scr' + 'ipt src=\"https://ad.360yield.com/default?li=288084&w=1800&h=1000&ic='\n+ (window.parent.tokuslid_ic_1800x1000 || '') + '&sb='\n+ (window.parent.tokuslid_sb_1800x1000 || '') + '&gd='\n+ (window.parent.tokuslid_gd_1800x1000 || '') +  '\">'\n+ '</scr' + 'ipt>');\n\n\n<\\script>\n";
};