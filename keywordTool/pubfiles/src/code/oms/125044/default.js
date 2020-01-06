integration.meta = {
	"sectionID" : "125044",
	"siteName" : "Der Westen",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706285',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css("z-index", "3");
	$(".page-wrapper").css({
		"margin-left" : "0px"
	});
	$("head").append('<style>header.header.fixed {left: auto !important;} </style>');

});
