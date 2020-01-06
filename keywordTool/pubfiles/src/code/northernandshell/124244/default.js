integration.meta = {
	"sectionID" : "124244",
	"siteName" : "OK",
	"publisher" : "northernandshell",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
   'mf_siteId': '681742',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_FastInit" : true,
	"plr_StartScrollOnAnchor" : true,
	"plr_ScrollAdjustment" : 48,
	"plr_URLKeywords" : 2,
	"plr_ConsentTimeout" : 3
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -48
			});
		}

		$("head").append("<style>#superbanner, #superbanner div:first-of-type{height:0px !important;}</style>");
	}
});

integration.custom.moveCreative = function(){
	var docScroll = $(document).scrollTop();
	var headerHeight = $("#header").height();

	if(docScroll >= headerHeight){
        $('#inskinanchor').addClass('ismClass');
	}else{
        $('#inskinanchor').removeClass('ismClass');
	}
}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};
