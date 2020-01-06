integration.meta = {
   'sectionID' : '127716',
   'siteName' : ' Nine Lifestyle Network- Desktop - (AU)  ',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1300]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
   'mf_siteId' : '857124',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1040,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body, .header-module__inner').css({
			"width" : "1040px",
			"margin" : "0 auto"
		});
		$('body').css({
			"overflow-x" : "visible"
		});
	}
});

integration.on("adServed", function(e) {
	$('.ism-frame').parent().css({
		'z-index' : '99'
	});
});

window.ISMPassback = function() {
	return "<script type=\"text/javascript\"> \n window.frameElement.setAttribute(\"width\", \"970px\");window.frameElement.setAttribute(\"height\", \"250px\");\n<\\script> \n <script type=\"text/javascript\">        var apntag = apntag || {};     \n        apntag.anq = apntag.anq || [];\n   \nvar apn_tagCode_pt = '" + integration.params.apn_tagCode + "';\nvar apn_pbWidth_pt = '" + integration.params.apn_pbWidth + "';\nvar apn_pbHeight_pt = '" + integration.params.apn_pbHeight + "';\nvar apn_adPosition_pt = '" + integration.params.apn_adPosition + "';\nvar apn_pbContentid_pt = '" + integration.params.apn_pbContentid + "';\nvar apn_pbPageType_pt = '" + integration.params.apn_pbPageType + "';\nvar apn_pbPageLevel01_pt = '" + integration.params.apn_pbPageLevel01 + "';\nvar apn_pbPageLevel02_pt = '" + integration.params.apn_pbPageLevel02 + "';\nvar apn_pbPageLevel03_pt = '" + integration.params.apn_pbPageLevel03 + "';\nvar apn_pbPageLevel04_pt = '" + integration.params.apn_pbPageLevel04 + "';\nvar apn_pbPageLevel05_pt = '" + integration.params.apn_pbPageLevel05 + "';      \n        (function() {\n            var d = document, scr = d.createElement('script'), pro = d.location.protocol,\n            tar = d.getElementsByTagName(\"head\")[0];\n            scr.type = 'text/javascript';  scr.async = true;\n            scr.src = ((pro === 'https:') ? 'https' : 'http') + '://acdn.adnxs.com/ast/ast.js';\n            if(!apntag.l){apntag.l=true; tar.insertBefore(scr, tar.firstChild);}\n        })();\n\n\n\n    apntag.anq.push(function() {\n\n     var adPos = apn_adPosition_pt;\n     var keyPos;\n\n        if (adPos == 'ATF'){\n            keyPos = 'above';\n        } else if (adPos == 'BTF'){\n            keyPos = 'below';\n        } else {\n            keyPos = '';\n        }\n\n      apntag.defineTag({\n        member: 1705,\n        targetId: 'inSkin',\n        invCode: apn_tagCode_pt,\n        sizes: [[970, 250]],\n        position: keyPos,\n        keywords:   {\n                AdPosition: apn_adPosition_pt,\n                contentId: apn_pbContentid_pt,\n                PageType: apn_pbPageType_pt,\n                PageLevel01: apn_pbPageLevel01_pt,\n                PageLevel02: apn_pbPageLevel02_pt,\n                PageLevel03: apn_pbPageLevel03_pt,\n                PageLevel04: apn_pbPageLevel04_pt,\n                PageLevel05: apn_pbPageLevel05_pt\n                    }\n    });\n\n    apntag.loadTags();\n        });\n        <\\script>\n        <div id=\"inSkin\">\n            <script type=\"text/javascript\">\n            apntag.anq.push(function() {\n            apntag.showTag('inSkin');\n            });\n            <\\script>\n        </div>\n";

};