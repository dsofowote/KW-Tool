integration.meta = {
	'sectionID' : '127956',
	'siteName' : 'iHeart Radio- Desktop - (AU) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '956475',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style>#page{width: 980px !important; background-image: none !important; margin: 0 auto !important;}</style>');
		$("head").append('<style>.module-desktop-navigation{left: 0px !important;}</style>');
		$("head").append('<style>.header-leaderboard-wrapper{margin: 10px 0;}</style>');
		$("head").append('<style>.page-content{margin-top: 0px !important;}</style>');
	}
});

integration.on('layoutChange', function(e) {
	var HeaderHeight = $(".module-desktop-navigation").height();
	$(".ism-frame").parent().addClass("inskinanchor");
	$("head").append('<style>.inskinanchor{margin-top: ' + HeaderHeight + 'px !important}</style>');
}); 

/* Passback Tag */
window.ISMPassback = function() {
   return "\n<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-4261758103850511\";\n/* 320x50_Inskin_PureGold_Passback */\ngoogle_ad_slot = \"8448802405\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 50;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};