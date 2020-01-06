integration.meta = {
	"sectionID": "124337",
	"siteName": "Netmums",
	"publisher": "netmums",
	"platform": "tablet"
};




integration.testParams = {};

integration.params = {


	'mf_siteId': '681702',
	'plr_PageAlignment': 'center',
	'plr_ContentW': 1024,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	//'srv_Keywords' : 'tablet_c, ISM_TEST',
	//'plr_FramePositionCSS' : 'margin: 0 auto; border-left: transparent solid 10px;',
	//'plr_GetContentHeightVersion' : 2,
	//'plr_EnableActiveResize' : false,
	//'plr_PageHeightAdjustment': 0,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
};

integration.on("adCallResult", function (e) {
	if (e.data.hasSkin) {
		if ($("header").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("header");
			integration.base.setCfg({
				"plr_AnchorParent": "#inskinanchor",
				"plr_PageHeightAdjustment": 0
			});
		}
		$("#inskinanchor").css({
			"margin-top": "50px"
		});
		$("head").append("<style>body {overflow-x: visible !important;}</style>");
		$(".card--pullboth").css({
			"margin-left": "0",
			"margin-right": "0"
		});
		$("#sas_25628").hide();
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			$(".doc").css({
				"margin-left": "0px"
			});
			$("head").append("<style>body {margin-left: 0px !important;}</style>");
			$("body").css({
				"padding-left": "20px"
			});
			$(".container").css({
				"margin-left": 0
			});
			integration.base.setCfg({
				"plr_PageAlignment": "left"
			});
			$(".page").css({
				"margin-left": "0"
			});
			$(".nmg-footer").css({
				"max-width": "1024px"
			});
		} else {
			$("#header2").css({
				"margin": "0 auto"
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script type=\"text/javascript\" src=\"//ww1.smartadserver.com/ac?out=js&nwid=1&siteid=54758&pgname=inskin/tablet&fmtid=29854&tgt=[sas_target]&visit=m&tmstp=[timestamp]&clcturl=[countgo]\"><\\script>";
};