integration.meta = {
	'sectionID' : '125861',
	'siteName' : 'Magic Maman - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707767',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType === "PageSkinSuperwide" || e.data.productType === "PageSkinPlusSuperwide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		var headerHeight = $('#header').height();
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}
		$('#footer').css({
			'max-width' : '1010px',
			'margin' : '0 auto'
		});
		$('#menuServicesContainer').css({
			'margin-top' : '0'
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.scrolling();
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	$(window).scroll(function() {
		integration.custom.scrolling();
	});
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "99"
	});
});

integration.custom.scrolling = function() {
	var fixedheaderHeight = $('.SiteHeader-contentContainer').height();
		if ($('body').hasClass('is-scrolled')) {
			integration.base.setCfg({
				plr_ScrollAdjustment : fixedheaderHeight
			});
		} else {
			integration.base.setCfg({
				plr_ScrollAdjustment : 0
			});
		}
}

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1720 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 984) / 2;
		/* content width divided by 2 */
		$(".MagazineSubscription-popin.is-visible").css({
			"right" : sideWidth - 10,
			"z-index" : 4
		});
	} else {
		$(".MagazineSubscription-popin.is-visible").css({
			"right" : "0px"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t); top.AKSdk.call_action('default_suit_HP' ); top.AKSdk.call_action('degault_suit_autres_pages' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"7SqhRah3B1r-JVrUpPxpjbz_3JbDnSK5Bd6mlOzNiRQ=\"},{}); })() <\\script>";
};