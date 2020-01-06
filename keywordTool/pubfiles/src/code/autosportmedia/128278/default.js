integration.meta = {
	'sectionID' : '128278',
	'siteName' : 'Motor1 - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1660]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '999761',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1400,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".top-banner-placeholder").hide();
		$(".m1-header-main-box-wrapper-sub").css({"margin": "0 155px 0 50px"});
        $('head').append('<style type="text/css">[id^="page_index_"] {margin: 0 auto !important}</style>');

		$(".root, .m1-header-main").css({
			"max-width" : "1400px",
			"margin" : "auto"
		});

		$("head").append("<style id='ismResize'></style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var shareBoxLeft = ($(window).width() - 1400) / 2;
	$("#ismResize").html("#floating_share_box{left: " + shareBoxLeft + "px !important;}");
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 970;\ngoogle_ad_height = 90;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
}