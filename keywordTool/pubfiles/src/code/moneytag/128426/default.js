integration.meta = {
	'sectionID' : '128426',
	'siteName' : 'Challenges - Tablet - (FR)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1012309',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};
integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameTop = e.data.plr_FrameTop;
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.pub-container-haut, #footer, .container{max-width: 1100px !important; margin: 0 !important;}</style>");
			$("header[class!='header-sticky']").css({
				"margin-left" : "-20px"
			});
		}
		var hHeight = $('header').height() + $(".header-sticky").height();
		if ($(".header-sticky").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-sticky");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -380,
				'plr_StartScrollOnAnchor' : true
			});
		}
		$('#footer').css({
			"width" : "1100px",
			"margin" : "0 auto",
			'display' : "block"
		});
		$("head").append("<style>.pub-container-haut{display: none !important;}</style>");
		$("head").append("<style>.article-share{margin-left: -48px !important; left: auto !important;} html, body{overflow-x: visible !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.Scroll();
	$(window).scroll(function() {
		integration.custom.Scroll();
	});
});

integration.custom.Scroll = function() {
	var hHeight = $(".header-sticky").height();
	if ($(window).scrollTop() > 0) {
		integration.base.setCfg({
			'plr_ScrollAdjustment' : hHeight
		});
	}
};

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div>\n\n \n\n<script type='text/javascript'>\n\n(function(){\n\np=function(e,t){\n\nt=t||{};var n=document.createElement('script');\n\nvar r='https:'==window.location.protocol?'https://':'http://';\n\nn.setAttribute('data-cfasync',false);\n\nn.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed();\n\nn.type='text/javascript';n.async='true';\n\nn.onload=n.onreadystatechange=function(){\n\nvar n=this.readyState;if(n&&n!='complete'&&n!='loaded')return;\n\ntry{top.AKSdk.init(e,t);top.AKSdk.call_action('default_read_article' ); }catch(r){}\n\n};\n\ntry{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){};\n\n};\n\np({\"desktop\":\"LCg3dz1ja7OZtQywm6uyGw==\",\"mobile\":\"LCg3dz1ja7OZtQywm6uyGw==\"},{});\n\n})()\n\n<\\script>";
};