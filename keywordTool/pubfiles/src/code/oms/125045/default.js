integration.meta = {
	"sectionID" : "125045",
	"siteName" : "Sudkurier",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706326',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_GetContentHeightVersion" : 2,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit": true

};
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
	$("head").append("<style> #navigationContainer.navigationFixed {margin-left : " + integration.custom.PageSkinLeftPanel + "px;} </style>");
});