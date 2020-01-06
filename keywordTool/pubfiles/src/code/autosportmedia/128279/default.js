integration.meta = {
	'sectionID' : '128279',
	'siteName' : 'Motor1 - Tablet - ( UK )',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '999940',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1400,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>[data-role='page'] {width: 1400px !important; margin: 0 auto;}</style>");
        $("head").append("<style>.m1-header-main {max-width: 1400px !important;}</style>");
        $(".m1-header-main-box-wrapper-sub").css({"margin": "0 155px 0 50px"});
        $('head').append('<style type="text/css">[id^="page_index_"] {margin: 0 auto !important}</style>');
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>[data-role='page'] {margin: 0 !important;}</style>");
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).resize(function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var shareBoxLeft = ($(window).width() - 1400) / 2;
	$("#floating_share_box").css({
		"left" : shareBoxLeft
	});

}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 728;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};
