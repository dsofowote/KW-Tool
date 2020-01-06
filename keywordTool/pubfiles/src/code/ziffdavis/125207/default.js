integration.meta = {
	"sectionID" : "125207",
	"siteName" : "PC Mag",
	"publisher" : "ign",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	
  'mf_siteId': '681825',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_PageHeightAdjustment" : -110,
	"plr_ContentW" : 1080,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=google_ads_iframe_], header-div, slidebox"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		var site_url = document.URL;
		var url_pref = site_url.substring(7, 9);
		var is_uk = (url_pref === "uk");

		var sitewidth = 1080;

		if (is_uk) {
			sitewidth = 1010
		};
		integration.base.setCfg({
			plr_ContentW : sitewidth
		});

		$('#gpt-billboard').css({
			'height' : '0px'
		});
		$('#adkit_billboard').css({
			'min-height' : '0px'
		});

		//$('header, , #header-div').css('position', 'static');
		$('footer, #footer').css({
			'width' : sitewidth + 'px',
			'margin' : '0 auto'
		});
		$('#content-well').css({
			'margin-top' : '25px'
		});

		// format the site for PageSkin Edge
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {

			$('footer, #main, #adkit_billboard, #adkit_footer, #footer, #content-well').css({
				'margin-left' : '0px'
			});
			$('#header-div, header').css({
				'margin-left' : '-20px'
			});
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
		}
	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'top' : '110px'
	});

});
