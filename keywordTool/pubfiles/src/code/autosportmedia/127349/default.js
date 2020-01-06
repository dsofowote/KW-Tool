integration.meta = {
	'sectionID' : '127349',
	'siteName' : 'Autosport - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.channelHome = [
   '/f1.html',
   '/fe.html',
   '/indycar.html',
   '/f2.html',
   '/gp3.html',
   '/motogp.html',
   '/moto2.html',
   '/moto3.html',
   '/tt.html',
   '/gt.html',
   '/imsa.html',
   '/wrc.html',
   '/erc.html',
   '/dakar.html',
   '/wtcc.html',
   '/btcc.html',
   '/dtm.html',
   '/supercars.html',
   '/wrx.html',
   '/national.html',
   '/other.html',
   '/perfomance.html',
   '/reviews.html',
   '/fv8+3.5.html'
];

integration.testParams = {
	'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {

	'mf_siteId' : '713134',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1040,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageScanExclude' : '.rightContent, .OUTBRAIN, .grid.footer',
	'plr_FastInit' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('.footer, #footer').css({
			'max-width' : '1040px'
		});
		$('body').addClass('pageskin-displayed');
	}
	$("head").append("<style>.pageskin-displayed .InSkinBrowser tbody{ background-color: transparent !important;}</style>");
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel) {
		var newheight = integration.custom.PageSkinTopPanel - height;
		$("#logincontent").css({
			"top" : newheight
		});
	} else {
		$("#logincontent").css({
			"top" : "0px"
		});
	}
}
