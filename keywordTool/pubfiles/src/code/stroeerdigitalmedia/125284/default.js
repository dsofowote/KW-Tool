integration.meta = {
    'sectionID' : '125284',
    'siteName' : 'Kino.de - Tablet - (AT CH DE)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '706613',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1024,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
		'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			$('.main-header, .container-default ').css({
						'margin' : '0 auto',
						'max-width' : '1024px'
					});
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
						$("head").append("<style> body {margin-left: 20px !important; overflow-x: visible !important;} </style>");
						$('.outer ').css({
							'margin-left' : '0px',
							'max-width' : '1024px'
						});
						$(".outer > header > .inner").css({
							'margin-left' : '32px',
							'max-width' : '1000px'
						});
        }
    }
});
