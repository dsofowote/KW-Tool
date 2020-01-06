integration.meta = {
  "sectionID": "125312",
  "siteName": "Hannoversche Allgemeine Zeitung",
  "publisher": "oms",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707867',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 978,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
	'plr_ForceFrameBottom' : 0,
	"plr_FastInit": true

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
			var headHeight = $(".pdb-navbar").outerHeight();
			var panelWidth = e.data.plr_FrameSideRight;
			var width = $(window).width();
			if ($(".pdb-navbar").length == 1) {
			            $("<div id='inskinanchor'></div>").insertAfter(".pdb-navbar");
			            integration.base.setCfg({
			                plr_AnchorParent : "#inskinanchor",
			                plr_PageHeightAdjustment : -headHeight
			            });
			        }
				$("#inskinanchor").css({
					"top" : headHeight,
					"position" : "relative"
				});
        $(".pdb-navbar").css({
            "left" : "0px"
        });
				$("#top").css({
						"margin-left" : "0px"
				});
				$(".page, .pdb-footer").css({
						"float" : "none"
				});
				$(".usabilla_live_button_container").css({
						"z-index" : "4"
				});
				if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
					var sideWidth = width - 978 - panelWidth - 40;
					$("#twslidead").css({
							"right" : sideWidth + 20
					});
				} else {
		        $("#twslidead").css({
		            "right" : "10px"
		        });
		    }
    }
});
