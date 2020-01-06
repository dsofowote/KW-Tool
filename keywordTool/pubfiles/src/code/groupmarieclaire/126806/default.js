integration.meta = {
	'sectionID' : '126806',
	'siteName' : 'Cuisine et vins de France - Desktop - (FR)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707096',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1020,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

/** Move to-top-of-page button inside PageSkin when overlaps **/
integration.on("layoutChange", function(e) {
	$(".ArticleLink--highlight").css({"margin": "0 auto", "max-width": "1020px"});
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});
integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1970) {/* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 1000) / 2;
		/* content width divided by 2 */
		$("#popinfacebook").css({
			"right" : sideWidth + 20
		});
	} else {
		$("#popinfacebook").css({
			"right" : "auto"
		});
	}
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('#zoneTop, #preFooter, #footer, #afterFooter').css({
			"max-width" : "1020px",
			"margin" : "0 auto"
		});
		$('#header').css({
			"margin-bottom" : "10px"
		});
		$('#beforeHeader, #rechercheHeader').css({
			"margin-top" : "10px"
		});
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -240/*Enter minus value of navigation height here.*/,
				plr_ScrollAdjustment : -176
			});
		}
		$(window).scroll(function() {
			var width = $(window).width();
			var sideWidth = (width - 1000) / 2;
			/* content width divided by 2 */
			$("#popinfacebook").css({
				"right" : sideWidth + 20,
				"bottom" : "-222px",
				"z-index" : "999"
			});
		});
	}
});

/**** Raise Z-index of PageSkin ****/
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'> (function(){ p=function(e,t){ t=t||{};var n=document.createElement('script'); var r='https:'==window.location.protocol?'https://':'http://'; n.setAttribute('data-cfasync',false); n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed(); n.type='text/javascript';n.async='true'; n.onload=n.onreadystatechange=function(){ var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return; try{top.AKSdk.init(e,t);top.AKSdk.call_action('default_suit' ); }catch(r){} }; try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){}; }; p({\"desktop\":\"tEQ_fAtaaw0K755Ta7Ya_w==\"},{}); })() <\\script>";
};

