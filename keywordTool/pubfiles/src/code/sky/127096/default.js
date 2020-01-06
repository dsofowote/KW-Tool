integration.meta = {
	'sectionID' : '127096',
	'siteName' : 'Sky Sports - (Publisher Bookings) Desktop - (UK) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.channelHome = ['/football', '/f1', '/boxing', '/football/news', '/rugby-league'];

integration.params = {
	'mf_siteId' : '681906',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentW" : 1024,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_URLKeywords" : 1,
	"plr_FastInit" : true,
	'plr_PageScanExclude' : ' .site-header, .site-footer, .site-layout-secondary__col2, .ob-widget-section, .OUTBRAIN '
	//"plr_HideElementsByID" : "banner",
	//"plr_HideElementsByClass" : "mpu, advert, advert__container"
};
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.advert--banner-wrap{display: none !important;} .site-header__col1:before{width:525px}</style>");
		$("body").addClass("advert--site-takeover");
		if ($('.site-header__body').length == 1) {
			/* Responsive pages only */
			integration.base.setCfg({
				'plr_ContentW' : 1024
			});
			$('head').append('<style>#InSkinBrowser0 { z-index: 10100000 !important; }</style>');
			/* Hide leaderboard placement at publishers request */
			$('.sdc-site-au__takeover').hide();
			$("body").css({
				"overflow" : "visible"
			});
		}
	}
});

integration.on("adServed", function(e) {
	/* Publisher is not serving Leaderboards at same time as PageSkin, hide placement */
	$('.top-nav, .site-nav, #skycomGlobalNav').css({
		'max-width' : '1024px',
		'margin' : '0 auto'
	});

	$('#new-site-message').css({
		'width' : '1024px',
		'left' : '50%',
		'margin-left' : '-501px'
	});
	$('#close-cookie-warning').css({
		'margin-right' : '10px'
	});
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
	if ($('.site-header__body').length == 1) {
		/* Responsive pages only */
		$('.site-header, .advert--banner-wrap, .site-footer, #cookie-warning').css({
			'max-width' : '1024px',
			'margin' : '0 auto'
		});
	} else {
		/* Non-Responsive pages only */
		$("#cookie-warning").css({
			'width' : '1024px',
			'padding-left' : '0px',
			'padding-right' : '0px',
			'margin' : '0 auto'
		});
	}
});

integration.custom.InSkinBottomNav = function() {
	var scrollPos = $(document).height() - ($(document).scrollTop() + $(window).height() );
	if (scrollPos <= 90) {
		var toAdd = (90 - scrollPos);
		if (toAdd < 0) {
			toAdd = 0;
		}
		$('#new-site-message').css({
			'marginBottom' : toAdd + 'px'
		});
	} else {
		$('#new-site-message').css({
			'marginBottom' : '0px'
		});
	}
};
/*
 window.ISMPassback = function() {
 return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n  googletag.pubads().definePassback(\n   \"/20346936/skysports\", [728, 90])\n  .setClickUrl(\"%%CLICK_URL_UNESC%%\")\n  .display();\n<\\script>";
 }; */

window.ISMPassback = function() {
	return "<script language='javascript' type='text/javascript'>\nrp_resize=function(e){var t,n,r,i;n=e.substring(0,e.indexOf(\"x\"));i=e.substring(e.indexOf(\"x\")+1,e.length);t=window.frameElement;if(t.getBoundingClientRect().height){r=t.getBoundingClientRect().height}else{r=t.offsetHeight}if(!t.height){t.setAttribute(\"height\",parseInt(i))}else{t.height=parseInt(i)}if(t.style.height)t.style.height=parseInt(i)+\"px\";if(!t.width){t.setAttribute(\"width\",parseInt(n))}else{t.width=parseInt(n)}if(t.style.width)t.style.width=parseInt(n)+\"px\"};rpc=function(e){if(e.status===\"ok\"){var t;var n;for(var r=0;r<e.ads.length;r++){t=e.ads[r];if(t.status===\"ok\"){if(t.type===\"script\"){document.write(\"<script type='text/javascript'>\"+t.script+\"</scr\"+\"ipt>\")}if(t.type===\"html\"){document.write(t.html)}rp_resize(\"\"||RubiconAdServing.AdSizes[t.size_id].dim)}else{document.write(\"<div>status=\"+t.status+\"</div>\")}}}}\nrpc = function(rs)\n{\n                if (rs.status === 'ok') {\n                                var ad;\n                                var html;\n                                for (var i=0; i < rs.ads.length; i++) {\n                                                ad = rs.ads[i];\n                                                if (ad.status === 'ok') {\n                                                                if (ad.type === 'script') {\n                                                                                document.write('<script type=\\'text/javascript\\'>'+ad.script+'</scr'+'ipt>');\n                                                                }\n                                                                if (ad.type === 'html') {\n                                                                                document.write(ad.html);\n                                                                }\nwindow.parent.document.querySelectorAll('.site-wrapper')[0].style.transform = 'translateY(250px)';\nwindow.parent.document.querySelectorAll('.site-wrapper')[0].style.webkitTransform = 'translateY(250px)';\nwindow.parent.document.querySelectorAll('.site-footer')[0].style.transform = 'translateY(250px)';\nwindow.parent.document.querySelectorAll('.site-footer')[0].style.webkitTransform = 'translateY(250px)';\n                                                                rp_resize('970x250');\n                                                                // Publisher impression tracking could be added here\n                                                } else {\n                                                                // Replace this line with publisher callback/passback or next step trigger\n                                                                document.write('' +\n                                                                                '<!--  Begin Rubicon Project Tag -->' +\n                                                                                '<!--  Site: Sky UK Sky Sports - RTB Only   Zone: PC More+ Size: Leaderboard  -->' +\n                                                                                '<scr'+'ipt language=\\'JavaScript\\' type=\\'text\\/javascript\\'>' +\n                                                                                'rp_account   = \\'7908\\';' +\n                                                                                'rp_site      = \\'18326\\';' +\n                                                                                'rp_zonesize  = \\'54626-2\\';' +\n                                                                                'rp_adtype    = \\'js\\';' +\n                                                                                'rp_smartfile = \\'[SMART FILE URL]\\';' +\n                                                                                'rp_kw        = \\'[INSERT KEYWORD HERE]\\';' +\n                                                                                '<\\/scr'+'ipt>' +\n                                                                                '<scr'+'ipt type=\\'text\\/javascript\\' src=\\'https:\\/\\/ads.rubiconproject.com\\/ad\\/7908.js\\'><\\/scr'+'ipt>' +\n                                                                                '<!--  End Rubicon Project Tag -->' +\n                                                                '');\n                                                }\n                                }\n                }\n}\n<\\script>\n \n<!--  Begin Rubicon Project Tag -->\n<!--  Site: Sky UK Sky Sports - RTB Only   Zone: PC More+   Size: IAB Billboard  -->\n<script language='JavaScript' type='text/javascript'>\nrp_account   = '7908';\nrp_site      = '18326';\nrp_zonesize  = '54626-57';\nrp_adtype    = 'jsonp';\nrp_smartfile = '[SMART FILE URL]';\nrp_callback  = rpc;\n<\\script>\n<script type='text/javascript' src='https://ads.rubiconproject.com/ad/7908.js'><\\script>\n<!--  End Rubicon Project Tag -->";
};
