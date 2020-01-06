integration.meta = {
	'sectionID' : '126802',
	'siteName' : 'Avantages - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708150',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $("#header").height();
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$('#body, #footer').css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight,
				plr_StartScrollOnAnchor : true,
				plr_ScrollAdjustment : 64
			});
		}
	}
});

/** Move to-top-of-page button inside PageSkin when overlaps **/
integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1730 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1000) / 2;
		/* content width divided by 2 */
		$(".MagazineSubscription-popin.is-visible").css({
			"right" : sideWidth
		});
	} else {
		$(".MagazineSubscription-popin.is-visible").css({
			"right" : "0"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t); top.AKSdk.call_action('default_suit_HP' ); top.AKSdk.call_action('default_suit_autres_pages' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"F4VN2OAuxlGYjyNS6MBdag==\"},{}); })() <\\script>";
};
