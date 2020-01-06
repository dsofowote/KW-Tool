integration.meta = {
	'sectionID' : '126296',
	'siteName' : 'Welt (DE Campaigns Only) - Tablet - (INT)',
	'platform' : 'tablet',
	'restrictions' : ''
};

integration.telemetry.setup({
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'plr_FastInit' : true,
	'custom' : true
});

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707856',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		$('section').css({'max-width':'970px','margin':'0 auto'});
		$('.c-ad__superbanner').css({'display':'none'});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
			integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			$('header, footer, section').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
			$('section').css({'padding-left':-(integration.custom.FrameSideRight)/2})

        }
    }
});