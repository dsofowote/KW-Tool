integration.meta = {
   'sectionID' : '128389',
   'siteName' : 'mirror.co.uk - Smartphone - (INT ex UK) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1008638',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true,
   'plr_URLKeywords' : 2
};


integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.article-page.inskinLoaded{overflow-x:hidden;}';
		stylesCSS += '.inskinLoaded #comments-wrapper .gig-composebox-site-login{margin-bottom:30px;}';
		stylesCSS += '.inskinLoaded #comments-wrapper.state-logout .comments-header{margin-top:43px;}';
		stylesCSS += '.inskinLoaded #comments-wrapper.state-login .comments-header{margin-top:0px;}';
		stylesCSS += '.inskinLoaded .top-slot{display:none;}';
		stylesCSS += '.inskinLoaded .sharewrap .sharebar-radial.radial-animate .icons{ top: 45px; right: 90px !important;}';
		stylesCSS += '.inskinLoaded .mod-header .primary{z-index:100000;}';
		stylesCSS += '.inskinLoaded #header-dropdown{z-index: 10000 !important;}';
		stylesCSS += '.inskinLoaded #div-gpt-ad-sticky-bottom-banner{z-index: 2001 !important;}';
		stylesCSS += '.inskinLoaded .html-embed-tweet, .inskinLoaded{background-color:white !important;}';
		stylesCSS += '.inskinLoaded .top-slot, .widget-ad--mbanner{height:0px;}';
		stylesCSS += '.inskinLoaded main, .inskinLoaded .inskinanchor{position:relative;top:-24px;}';
		stylesCSS += '.smartbanner-show .inskinLoaded .inskinanchor{position:relative;top:36px;z-index:6000;}';
		stylesCSS += '.smartbanner-show .inskinLoaded.article-page .inskinanchor{top:26px!important;}';
		stylesCSS += '.smartbanner-show .inskinLoaded main{top:36px!important;}';
		stylesCSS += '.inskinLoaded .smartbanner, .inskinLoaded .smartbanner-ios {z-index:6000;}';
		stylesCSS += '.inskinLoaded .tag-list, .inskinLoaded .article-type.publication-font, .inskinLoaded .html-embed, .inskinLoaded .entry-info, .inskinLoaded .live-event-key-events{margin-left:10px;margin-right:10px;}';
		stylesCSS += '.inskinLoaded .in-article-image, .inskinLoaded .mod-video, .inskinLoaded article .MediaCard, .inskinLoaded .twitter-tweet, .inskinLoaded .read-more-links{margin-left:10px;margin-right:10px;}';
		stylesCSS += '.inskinLoaded .instagram-media, .inskinLoaded #social-follow, .inskinLoaded #comments-wrapper, .inskinLoaded .teaser{margin-left:10px !important;margin-right:10px !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .mod-cookiepolicy.active{max-width:calc(100% - " + integration.custom.FrameSideRight + "px); z-index: 1999;}</style>");
});

integration.on('adServed', function(e) {
	var childdiv = document.getElementsByClassName("ism-frame")[0];
	var parentdiv = childdiv.parentNode;
	$(parentdiv).addClass("inskinanchor");

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	var stylesCSS = '<style id="inskinStyles2" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	$(document).scroll(function() {
		integration.custom.onScroll();
	});
	integration.custom.onScroll();
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
	if ($("html").hasClass("smartbanner-show")) {
		integration.base.setCfg({
			plr_PageHeightAdjustment : -38
		});
	}
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = (windowWidth - integration.custom.FrameSideRight) - 20;

	var newValue = ".inskinLoaded .in-article-image, .inskinLoaded .mod-video, .inskinLoaded .twitter-tweet, .inskinLoaded .read-more-links{max-width:" + contentWidth + "px !important}";
	newValue += ".inskinLoaded .twitter-tweet, .inskinLoaded .top-stories.section-theme-border, .inskinLoaded .instagram-media{width:" + contentWidth + "px !important}";
	newValue += ".inskinLoaded .entry-content p img{width:" + (contentWidth - 5) + "px !important}";
	document.getElementById("inskinStyles2").innerHTML = newValue;
}

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
	//$("#inskinanchor").remove();
});

integration.custom.onScroll = function() {
	if ($(document).scrollTop() < 40) {
		var margin = 45 - $(document).scrollTop();
		var newValue = ".inskinLoaded .sharewrap .sharebar-radial.radial-animate .icons{top: " + margin + "px} ";
	} else {
		var newValue = ".inskinLoaded .sharewrap .sharebar-radial.radial-animate .icons{top: 5px} ";
	}
	document.getElementById("inskinStyles").innerHTML = newValue;
};

integration.on('layoutChange', function(e) {
	try {
		jQuery(window).trigger("resize");
	} catch(e) {
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[320,50]])\n  .setClickUrl('%%CLICK_URL_UNESC%%')\n  .display();\n <\\script>";
};
