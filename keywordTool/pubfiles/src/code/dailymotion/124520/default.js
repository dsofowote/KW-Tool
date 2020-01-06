integration.meta = {
	"sectionID" : "124520",
	"siteName" : "Daily Motion",
	"publisher" : "dailymotion",
	"platform" : "desktop"
};

integration.telemetry.setup({ 
	'custom': false
});

/* Disable WebTrekk for invalid calls and limit empty calls to 5% */
integration.wtBlacklist = true;
integration.wtLimitEmptyAdCalls = 0.05;




/* Disable WebTrekk */
integration.wtBlacklist = true;

integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'mf_siteId' : '706246',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 970,
	"plr_AnchorParent" : "#topwrapper",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-], player_container",
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		$('#ticker').hide();
		$('#footer_centered').css({
			'paddingRight' : '0px'
		});
		$("#top_banner").css({
			"padding-top" : "10px",
			"padding-left" : "10px"
		});
		$('#footer, .sd_footer').css({
			'max-width' : '970px',
			'left' : '50%',
			'margin-left' : '-485px'
		});

		/* new code for resizing video pages to 1140px */
		if (window.location.pathname.indexOf('/video/') != -1) {
			$('#wrapper').css({
				'max-width' : '1130px',
				'margin' : '0 auto',
				'display' : 'block'
			});
			$('#content').css({
				'margin-left' : '10px',
				'padding' : "0px"
			});
			$('#footer, .sd_footer').css({
				'max-width' : '1140px',
				'left' : '50%',
				'margin-left' : '-570px'
			});

			integration.base.setCfg({
				'plr_ContentW' : 1140
			});
			/* Sliding PageSkin over when sidebar is open on video pages 
			$(".sd_header__navigation").on("click", function(){
				if($( window ).width() > 1230){
					if ($(".sd_header__navigation").hasClass("active")){
						$(".ism-frame").parent().animate({ "left" : "130px"}, 300);
						$('#wrapper').css({
							'max-width' : '1360px'
						});
						$('#footer, .sd_footer').css({
							'left' : '57%'
						});
					}
					else{
						$(".ism-frame").parent().animate({ "left" : "0px"}, 300);
						$('#wrapper').css({
							'max-width' : '1130px'
						});
						$('#footer, .sd_footer').css({
							'left' : '50%'
						});
					}
				};
				
			});*/
		}
		else{
			/*$(".sd_header__navigation").on("click", integration.custom.SideBarSlide);
			*/
		}
		/* end of new code for resizing video pages to 1140px */

		footerheight = $('#footer').height();

		if (footerheight < 200) {
			integration.custom.InSkinTopNav();
			$(document).scroll(function() {
				integration.custom.InSkinTopNav();
			});
		}
	}
});

integration.on("layoutChange", function(e) {
try{
	jQuery(window).trigger("resize");
}catch(e){}
});

/*
integration.on("adServed", function(e) {
	integration.custom.SideBarSlide();
});*/

integration.custom.InSkinTopNav = function() {
	var scrollPos = $(document).height() - ($(document).scrollTop() + $(window).height());
	if (scrollPos <= 90) {
		var toAdd = (90 - scrollPos);
		if (toAdd < 0) {
			toAdd = 0;
		}
		$('#footer').css('marginBottom', toAdd + 'px');
	} else {
		$('#footer').css('marginBottom', '0px');
	}

};

/*
integration.custom.SideBarSlide = function() {
	if ($(window).width() > 1230) {
		if ($(".sd_header__navigation").hasClass("active")) {
			$(".ism-frame").parent().animate({
				"left" : "130px"
			}, 100);
			$('#footer, .sd_footer').css({
				'left' : '57%'
			});
		} else {
			$(".ism-frame").parent().animate({
				"left" : "0px"
			}, 100);
			$('#footer, .sd_footer').css({
				'left' : '50%'
			});
		}
	};

}*/

window.ISMPassback = function() {
  return "<script type=\"text/javascript\" src=\"http://www.dailymotion.com/masscast/RealMedia/ads/adstream_jx.ads/dailymotion.com/passback_Skin_ISM-UDT@x28\"><\\script>";
};

integration.enableTelemetryTest = false;
