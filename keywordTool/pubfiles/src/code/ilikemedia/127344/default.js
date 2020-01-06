integration.meta = {
	'sectionID' : '127344',
	'siteName' : 'Livestrong - Tablet - (INT ex US)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.channelHome = ['/recipes/', '/cat/sports-and-fitness/', '/cat/health/', '/cat/sports-and-fitness/', '/workouts/'];

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '713132',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageScanExclude' : "#rcp-slider, .related_content_rail__list, .content_card_deck__row, .js-fb-comments, .editor_pick, script"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		$("body").css({
			"width" : "1024px",
			"margin" : "0 auto"
		});
		$(".social-share-icons-wrapper").css({
			"margin-left" : "40px",
			"z-index" : "3"
		});

		$("head").append("<style>header{max-width: 1024px !important; margin: 0 auto 20px !important;}</style>");

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$(".social-share-icons-wrapper").css({
				"margin-left" : "0px"
			});
			$('head').append('<style type="text/css">.social-share-icons-wrapper {left: 30px!important;}</style>');
			$('head').append('<style type="text/css">.container--homepage {max-width: 1024px;}</style>');
			$("body > .container, #footer, header").css({
				"max-width" : "1024px",
				"margin-left" : "0px"
			});
		}
	}
});

integration.on("adServed", function(e) {
	/*
	 $(".ism-frame").parent().css({
	 "z-index" : "10000001"
	 });
	 */

	/*
	 $.each($(".ism-frame"), function(i, value) {
	 $(value).css({
	 "z-index" : "10000001"
	 });
	 });
	 */

	$("head").append("<style>.ism-frame{z-index: 10000001 !important;}</style>");

});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var videoRight = integration.custom.FrameSideRight + 20;

	$("head").append("<style>.jwplayer__container--sticky{right: " + videoRight + "px !important; bottom: 100px !important;}</style>");
});
