integration.meta = {
  "sectionID": "124662",
  "siteName": "OstseeZeitung",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706577',
  "plr_UseCreativeSettings": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": "",
  'plr_PageAlignment' : 'custom',
  'plr_FramePositionCSS' : 'margin-left: 160px; border-left: transparent solid 0px;',
  'plr_ContentW': 978,
  'plr_ForceFrameBottom' : 0
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
				$("#top").css({
						"margin-left" : "0px"
				});
				$(".page, .pdb-footer").css({
						"float" : "none"
				});
				$(".usabilla_live_button_container").css({
						"z-index" : "4"
				});
				if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide || width > 1400) {
					var sideWidth = width - 978 - panelWidth - 40;
					$("#twslidead").css({
							"right" : sideWidth + 20
					});
				} else {
		        $("#twslidead").css({
		            "right" : "10px"
		        });
		    }
        $("#oms_gpt_superbanner").hide();
    }
});
