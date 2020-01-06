integration.meta = {
	'sectionID' : '126466',
	'siteName' : 'Good To Know - (Competitions) - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1290]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '706880',
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
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};
