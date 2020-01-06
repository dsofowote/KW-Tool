integration.meta = {
	'sectionID' : '126735',
	'siteName' : 'The Fix - Desktop - (AU)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '708055',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1030,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_ServePassbackInParent' : true,
	'plr_PassbackIframeStyle' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#page > div > nav:first-child").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page > div > nav:first-child");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -43
			});
		}
		$('#inskinanchor').css({
			"position" : "relative",
			"margin-top" : "43px"
		});
		$("head").append("<style>.dznqhv{margin-top: 0 !important;}</style>");
		$(".shortcuts, .header-wrapper, #ninemsn-global-footer, .header-netkit.ninemsn-light-header, #page, .netkit-header, .header").css({
			"max-width" : "1030px",
			"margin" : "auto"
		});
	}
});

window.ISMPassback = function() {
	var includeJquery = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'
	var resizer = "<script type=\"text\/javascript\"> \r\n    console.log(\"passback fired\");    \r\n\r\n    var ismi = window.frameElement;\r\n    console.log(ismi);\r\n    var apnt = document.getElementById(\"inSkin\");\r\n    console.log(apnt);\r\n\r\n    setTimeout(function(){\r\n    var iow = $(\"[id*=\'utif_inSkin_\']\").outerWidth();\r\n    var ioh = $(\"[id*=\'utif_inSkin_\']\").outerHeight();\r\n    ismi.setAttribute(\"width\", iow);\r\n    ismi.setAttribute(\"height\", ioh);\r\n    ismi.setAttribute(\"margin\", \"0px\");\r\n\r\n    console.log(iow);\r\n    console.log(ioh);\r\n    }, 1000);\r\n\r\n    setTimeout(function(){\r\n    var iow = $(\"[id*=\'utif_inSkin_\']\").outerWidth();\r\n    var ioh = $(\"[id*=\'utif_inSkin_\']\").outerHeight();\r\n    ismi.setAttribute(\"width\", iow);\r\n    ismi.setAttribute(\"height\", ioh);\r\n    ismi.setAttribute(\"margin\", \"0px\");\r\n\r\n    console.log(iow);\r\n    console.log(ioh);\r\n    }, 3000);\r\n\r\n    setTimeout(function(){\r\n    var iow = $(\"[id*=\'utif_inSkin_\']\").outerWidth();\r\n    var ioh = $(\"[id*=\'utif_inSkin_\']\").outerHeight();\r\n    ismi.setAttribute(\"width\", iow);\r\n    ismi.setAttribute(\"height\", ioh);\r\n    ismi.setAttribute(\"margin\", \"0px\");\r\n\r\n    console.log(iow);\r\n    console.log(ioh);\r\n    }, 6000);\r\n    \r\n    console.log(\"passback logged\");\r\n<\/script>";
	return "" + includeJquery + "<script type=\"text/javascript\">        var apntag = apntag || {};     \n        apntag.anq = apntag.anq || [];\n   \nvar apn_tagCode_pt = '" + integration.params.apn_tagCode + "';\nvar apn_pbWidth_pt = '" + integration.params.apn_pbWidth + "';\nvar apn_pbHeight_pt = '" + integration.params.apn_pbHeight + "';\nvar apn_adPosition_pt = '" + integration.params.apn_adPosition + "';\nvar apn_pbContentid_pt = '" + integration.params.apn_pbContentid + "';\nvar apn_pbPageType_pt = '" + integration.params.apn_pbPageType + "';\nvar apn_pbPageLevel01_pt = '" + integration.params.apn_pbPageLevel01 + "';\nvar apn_pbPageLevel02_pt = '" + integration.params.apn_pbPageLevel02 + "';\nvar apn_pbPageLevel03_pt = '" + integration.params.apn_pbPageLevel03 + "';\nvar apn_pbPageLevel04_pt = '" + integration.params.apn_pbPageLevel04 + "';\nvar apn_pbPageLevel05_pt = '" + integration.params.apn_pbPageLevel05 + "';    \nvar apn_pbSizes = '" + integration.params.apn_pbSizes + "';\n\n        (function() {\n            var d = document, scr = d.createElement('script'), pro = d.location.protocol,\n            tar = d.getElementsByTagName(\"head\")[0];\n            scr.type = 'text/javascript';  scr.async = true;\n            scr.src = ((pro === 'https:') ? 'https' : 'http') + '://acdn.adnxs.com/ast/ast.js';\n            if(!apntag.l){apntag.l=true; tar.insertBefore(scr, tar.firstChild);}\n        })();\n\n\n\n    apntag.anq.push(function() {\n\n     var adPos = apn_adPosition_pt;\n     var keyPos;\n\n        if (adPos == 'ATF'){\n            keyPos = 'above';\n        } else if (adPos == 'BTF'){\n            keyPos = 'below';\n        } else {\n            keyPos = '';\n        }\n\n      apntag.defineTag({\n        member: 1705,\n        targetId: 'inSkin',\n        invCode: apn_tagCode_pt,\n        sizes: apn_pbSizes,\n        position: keyPos,\n        keywords:   {\n                AdPosition: apn_adPosition_pt,\n                contentId: apn_pbContentid_pt,\n                PageType: apn_pbPageType_pt,\n                PageLevel01: apn_pbPageLevel01_pt,\n                PageLevel02: apn_pbPageLevel02_pt,\n                PageLevel03: apn_pbPageLevel03_pt,\n                PageLevel04: apn_pbPageLevel04_pt,\n                PageLevel05: apn_pbPageLevel05_pt\n                    }\n    });\n\n    apntag.loadTags();\n        });\n        <\\script>\n        <div id=\"inSkin\">\n            <script type=\"text/javascript\">\n            apntag.anq.push(function() {\n            apntag.showTag('inSkin');\n            });\n            <\\script>\n        </div>\n" + resizer + "";
};
