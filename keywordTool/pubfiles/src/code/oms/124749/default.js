integration.meta = {
	"sectionID" : "124749",
	"siteName" : "Die Rheinpfalz",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707302',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1037,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var panelWidth = e.data.plr_FrameSideRight;
		var width = $(window).width();
		var headHeight = $("#mainMenu").outerHeight();
		integration.base.setCfg({
				"plr_ScrollAdjustment": headHeight
		});
		$("body").css("width", "inherit");
		$('body').css('position', 'static');
		$(".ad-top").css({
			"height" : "0px"
		});
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide || width > 1400) {
      var sideWidth = width - 1050 - panelWidth;
      $(".scrollicon").css({
          "right" : sideWidth + 20
      });
    } else {
        $(".scrollicon").css({
            "right" : "10px"
        });
    }
	}
});
