integration.meta = {
	'sectionID' : '128390',
	'siteName' : 'Trinity Mirror Regionals - Smartphone - (INT ex UK)   ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1008639',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
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
		stylesCSS += '.inskinLoaded #takeover, .inskinLoaded #header-dropdown{z-index: 9999;}';
		stylesCSS += '.inskinLoaded .mod-header .secondary{z-index:2000;}';
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

integration.on('adServed', function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '2000'
	});

	var childdiv = document.getElementsByClassName("ism-frame")[0];
	var parentdiv = childdiv.parentNode;
	$(parentdiv).addClass("inskinanchor");

	$("head").append('<style id="inskinStyles" type="text/css"></style>');

	$(document).scroll(function() {
		integration.custom.onScroll();
	});
	integration.custom.onScroll();
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .mod-cookiepolicy.active{max-width:calc(100% - " + integration.custom.FrameSideRight + "px); z-index: 1999;}</style>");

	if ($("div#takeover").length == 1) {
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded main, .inskinLoaded .inskinanchor{top: 7px;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
	if ($("html").hasClass("smartbanner-show")) {
		integration.base.setCfg({
			plr_PageHeightAdjustment : -38
		});
	}
});

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
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[320,50]])\n.setClickUrl('%%CLICK_URL_UNESC%%')\n.display();\n <\\script>";
};