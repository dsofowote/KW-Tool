integration.meta = {
   'sectionID' : '127527',
   'siteName' : 'Games Radar US - (Smartphone) - (US)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734993',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.dfp-mpu{left:-20px;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameTop = e.data.plr_FrameTop;
	var winWidth = $(window).width(); 
	var ismNavWidth = winWidth - integration.custom.FrameSideRight; 
	var searchBoxHeight = $('body > nav').height(); 
	var ismSearchBoxTop = searchBoxHeight + integration.custom.FrameTop; 
	
	$('body > nav > div > div > div.wrapper > div > ul').css({
		'max-width' : ismNavWidth, 
		'top' : integration.custom.FrameTop
	});
	
	$('body > nav > div > div > label.button-search.masthead-item').css({
		'right' : integration.custom.FrameSideRight, 
		'top' : integration.custom.FrameTop
	});
	
	$('body > nav > div > div > form').css({
		'right' : integration.custom.FrameSideRight,
		'top' : ismSearchBoxTop, 
		'max-width' : ismNavWidth
	});
	
	$('body > nav > div > div > div.logo > a > span.site-logo').css({
		'margin-right' : '3px'
	});
	
	$('body > div.spot-im-ticker.spot-im-mobile.spot-im-brand.spot-im-right').css({
		'right' : integration.custom.FrameSideRight
	});
	
	$('#spot-im-frame-newsfeed').css({
		'right' : integration.custom.FrameSideRight,
		'top' : ismSearchBoxTop
	});
	
	//5px extra to make sure content isn't cut off
	$(".recommendation-container .recommended-article .article-name, .article-name.item-1").css({
		"width" : ismNavWdith - 5
	});
	
	var rowCss = "<style>#spot-im-frame-newsfeed {right :";
	rowCss += integration.custom.FrameSideRight; 
	rowCss += "px !important; top : "; 
	rowCss += integration.custom.FrameTop; 
	rowCss += "px !important;}</style>";
	$("head").append(rowCss); 
	
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999999999"
	});
});

