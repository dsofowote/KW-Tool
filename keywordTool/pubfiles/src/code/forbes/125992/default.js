integration.meta = {
	'sectionID' : '125992',
	'siteName' : 'Forbes',
	
	'platform' : 'tablet',
	'restrictions' : 'iOS 7+ only (responsive)'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_Responsive' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			'overflow-x' : 'visible'
		});
		$('head').append('<style>.ismPushDown{ margin-top: 100px}</style>');

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});

			$('head').append('<style>body{ margin-left: 0px !important}</style>');
		}
		if (e.data.productType == "PageSkinPlusTablet" || e.data.format == "Pageskin Plus") {
			/* PageSkin Edge specific changes */
			$('head').append('<style>.ismPushDown{ margin-top: 250px}</style>');

		}
		$(document).scroll(function() {
			integration.custom.onScroll();
		});
		integration.custom.onScroll();

	}
});

integration.custom.onScroll = function() {
	if ($(document).scrollTop() < 100) {
		$('.article-sidebar').addClass('ismPushDown');
	} else {
		$('.article-sidebar').removeClass('ismPushDown');
	}
};
