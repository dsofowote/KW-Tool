integration.meta = {
	"sectionID" : "125114",
	"siteName" : "Dattelner Morgenpost",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706675',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1008,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
	$("head").append('<style> #header.fixed {margin-left : ' + integration.custom.PageSkinLeftPanel + 'px;} #header.fixed.inSkinHeader {margin-left: 0px; position: absolute; left: 30px; top: 10px; z-index: 2;} #header.fixed.inSkinHeader DIV.mdhb { display: block;}</style>');
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 130) {
		$('#header').addClass('inSkinHeader');
	} else {
		$('#header').removeClass('inSkinHeader');
	}
}