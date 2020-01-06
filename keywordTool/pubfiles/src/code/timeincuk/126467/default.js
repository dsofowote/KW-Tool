integration.meta = {
	'sectionID' : '126467',
	'siteName' : 'Good To Know - (Competitions) - Tablet - (UK)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '707060',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#gtkBillboardSpace').css({
			'display' : 'none'
		});
		$('#dmriContainer > div.container.contentContainer > div.row').css({
			'margin-right' : '0px',
			'margin-left' : '0px'
		});
		$('#dmriContainer').css({
			'padding-left' : '10px'
		});
		$('#dmriContainer > div.container.contentContainer > div.row > div').css({
			'margin-right' : '0px'
		});
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('body').css({
				'max-width' : '1030px'
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
