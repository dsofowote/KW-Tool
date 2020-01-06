integration.meta = {
	"sectionID" : "124301",
	"siteName" : "Netmums",
	"publisher" : "netmums",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1284]
};

integration.params = {
	
   'mf_siteId' : '681746',
   "plr_UseCreativeSettings" : true,
   "plr_UseFullVersion" : false,
   "plr_ContentW" : 1024,
   "plr_ContentType" : "PAGESKINEXPRESS",
   "plr_PageAlignment" : "center",
   "plr_HideElementsByID" : "ads",
   "plr_HideElementsByClass" : "banner, ad-mpu, google",
   "plr_StartScrollOnAnchor" : true,
   "plr_ScrollAdjustment" : 0
}; 


integration.on("layoutChange", function(e) {
	/*try {
		var advertID = integration.params.plr_CachedISAPResponse.PageSkinAd.CampaignID;
	} catch(e) {

	}
	if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
		//$('body').append('<style type="text/css">body {padding-top: 50px !important;background: none !important;}</style>');
		$('body').append('<style type="text/css">.nmg-fixedhide--unpinned .nmg-header__inner {opacity: 1 !important;}</style>');
		$(".ism-frame").parent().css({
			"top" : "-5px"
		});
		console.log("FIXED WIDTH!!!!!!!!!!!!!!!!!!");
		integration.base.setCfg({
            "plr_StartScrollOnAnchor" : true,
            "plr_ScrollAdjustment" : 50
       });
	}*/
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("body").css({
			"overflow-x" : "visible"
		});
		$("head").append("<style>.nmg-header{height: 0!important;}</style>");
		$('body').append('<style type="text/css">body {padding-top: 50px !important;background: none !important;}</style>');
		$(".ad--call-1").hide();
		$(".page").css({
			"padding-top" : "0"
		});
		$(".card--featured").css({
			"margin-top" : "40px"
		});
		
		///////////FIXED WIDTH////////////
		try {
			var advertID = integration.params.plr_CachedISAPResponse.PageSkinAd.CampaignID;
		} catch(e) {

		}
		if (integration.params.plr_CachedISAPResponse.PageSkinAd.settings.swFixedSides) {
			//$('body').append('<style type="text/css">body {padding-top: 50px !important;background: none !important;}</style>');
			$('body').append('<style type="text/css">.nmg-fixedhide--unpinned .nmg-header__inner {opacity: 1 !important;}</style>');
			$(".ism-frame").parent().css({
				"top" : "-5px"
			});
			console.log("FIXED WIDTH!!!!!!!!!!!!!!!!!!");
			integration.base.setCfg({
	            "plr_StartScrollOnAnchor" : true,
	            "plr_ScrollAdjustment" : 50
	       });
		}
		
		//////////FIXED WIDTH///////////
		
	}
});


integration.on("init", function(e) {
	/* fix to resolve an issue with their ad-server */
	if (navigator.userAgent.indexOf('MSIE') != -1) {
		var _ism_interval = setInterval(function() {
			_ism_content_loaded();
		}, 1000);
		function _ism_content_loaded() {
			try {
				if (InSkin.BaseInstances.myPageSkin.swReady && document.readyState != "loading") {
					var DOMContentLoaded_event = document.createEvent("Event");
					DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);
					var ismdivs = window.document.getElementsByClassName("ism-frame");
					for (var i = 0; i < ismdivs.length; i++) {
						ismdivs[i].dispatchEvent(DOMContentLoaded_event);
					}
					clearInterval(_ism_interval);
				}
			} catch(err) {
			}
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script type=\"text/javascript\" src=\"//ww1.smartadserver.com/ac?out=js&nwid=1&siteid=54758&pgname=inskin/desktop&fmtid=25628&tgt=[sas_target]&visit=m&tmstp=[timestamp]&clcturl=[countgo]\"><\\script>";
};
