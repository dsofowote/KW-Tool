integration.meta = {
	"sectionID" : "125304",
	"siteName" : "Marie Claire Maison",
	"publisher" : "groupemarieclaire",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1280]
};

integration.params = {
	'mf_siteId' : '706738',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1020,
	"plr_UseFullVersion" : true,
	'plr_PageHeightAdjustment' : -247,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "advertising"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#page, #footer").css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinBotPanel = e.data.plr_FrameBottom;
	integration.custom.PageSkinTopFrame = e.data.plr_FrameTop;
	$("body").css({
		"padding-bottom" : integration.custom.PageSkinBotPanel
	});
	$(".menuContainer").css({
		"margin-top" : integration.custom.PageSkinTopFrame
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'>\n(function(){\np=function(e,t){\nt=t||{};var n=document.createElement('script');\nvar r='https:'==window.location.protocol?'https://':'http://';\nn.setAttribute('data-cfasync',false);\nn.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed();\nn.type='text/javascript';n.async='true';\nn.onload=n.onreadystatechange=function(){\nvar n=this.readyState;if(n&&n!='complete'&&n!='loaded')return;\ntry{top.AKSdk.init(e,t);top.AKSdk.call_action('default_suit' ); }catch(r){}\n};\ntry{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){};\n};\np({\"desktop\":\"8RrZE5QEeKP7B9i25khqdQ==\"},{});\n})()\n<\\script>\n";
};
