integration.meta = {
    'sectionID' : '128235',
    'siteName' : 'Madame - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '993454',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight + 4;
			var headerHeight = $('.bx-header__navi-flooding').height();
			$('.bx-page--structureterm, .bx-grid').css({'width': '1320px', 'right': - integration.custom.FrameSideRight});
			$('head').append('<style>.bx-header__wrapper{width:1440px !important; right: 0!important}</style>');
			$('body').css({'overflow-x': 'visible'});
			if ($(".bx-header").length == 1) {
					$("<div id='inskinanchor'></div>").insertAfter(".bx-header");
					integration.base.setCfg({
							plr_AnchorParent: "#inskinanchor",
							plr_ScrollAdjustment : headerHeight,
					})
			}
    }
});
