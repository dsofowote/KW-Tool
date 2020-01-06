integration.meta = {
	'sectionID' : '128717',
	'siteName' : 'Football League World - Tablet - ( UK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1032755',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 100,
	'plr_FastInit' : true,
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		$("head").append('<style>.mvp-fly-top{right: ' + integration.custom.FrameSideRight + 'px !important;}</style>');
		$('body').css({'display':'flow-root'});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("body").append("<style>#mvp-site{margin: 0 !important;} #mvp-main-nav-top, #mvp-main-nav-bot{left: 0; right: auto;}</style>");
		}
		$("body").append("<style>html{overflow-x: visible;} #mvp-site{max-width: 1000px; margin: 0 auto; float: none !important;} #mvp-main-nav-top, #mvp-main-nav-bot{left: 0; right: 0;}</style>");
	}
	integration._addPixel();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s)\n{d=w.document;w.ggv2id=t;s=d.createElement('script');\ns.async=true;s.src='https://js.gumgum.com/services.js';\nd.getElementsByTagName('head')[0].appendChild(s);}\n(top,'5b89fd5c'));<\\script>";
};
