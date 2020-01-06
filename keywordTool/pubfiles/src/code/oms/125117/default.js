integration.meta = {
	"sectionID" : "125117",
	"siteName" : "Waltroper Zeitung",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707505',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1008,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("layoutChange", function(e) {
	integration.on.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.on.PageSkinLeftPanel = e.data.plr_FrameSide;
	$("head").append('<style> #header.fixed {margin-left : ' + integration.on.PageSkinLeftPanel + 'px;} #header.fixed.inSkinHeader {margin-left: 0px; position: absolute; left: 30px; top: 10px; z-index: 2;} #header.fixed.inSkinHeader DIV.mdhb { display: block;}</style>');
	integration.on.InSkinTopNav();
	$(document).scroll(function() {
		integration.on.InSkinTopNav();
	});
});

integration.on.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.on.PageSkinTopPanel + 130) {
		$('#header').addClass('inSkinHeader');
	} else {
		$('#header').removeClass('inSkinHeader');
	}
}