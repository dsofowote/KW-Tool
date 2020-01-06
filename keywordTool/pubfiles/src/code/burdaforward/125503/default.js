integration.meta = {
	'sectionID' : '125503',
	'siteName' : 'Fit For Fun - Desktop - (AT CH DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1324]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707869',
	'plr_PageAlignment' : 'custom',
	'plr_FramePositionCSS' : 'margin: 0 auto; left: -73px;',
	'plr_ContentW' : 1004,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		// Publisher has 2 different classes on the body and each of them has different positioning.
		if ($("body").hasClass('with-left-sky')) {
			integration.base.setCfg({
				'plr_PageAlignment' : 'center'
			});
		}
	}
});
