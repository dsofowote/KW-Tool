integration.meta = {
	'sectionID' : '126875',
	'siteName' : 'Luxuo - Smartphone - (SG) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707551',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : 0
};

integration.on('adCallResult', function(e) {	
	if (e.data.hasSkin) {
	    $("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">';
			 stylesCSS += '.inskinLoaded #mobile-header{z-index: 3;}';
			 if ($("#mobile-header").length == 1) {
			     $("<div id='inskinanchor'></div>").insertAfter("#mobile-header");
                integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_SwipeoutNavOffset : 47
                });  
			 }
			 stylesCSS += 'inskinLoaded #container{padding-top: 0;}';
			 stylesCSS += 'body.inskinLoaded {overflow-x: visible;}';
			 /*stylesCSS += '.inskinLoaded .single-article-container{padding-right: 20px;}';*/
			 stylesCSS += '</style>' 
		$('head').append(stylesCSS); 
	}
});

integration.on('adServed', function(e) {
	var hheight = $('#mobile-header').outerHeight();
	$("#inskinanchor").css({
		"padding-top" : hheight
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function (){
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	var cwidth = wwidth - integration.custom.FrameSideRight;

	$("head").append("<style>.inskinLoaded .latest-articles ul{min-width: " + cwidth + "px !important;}</style>");
	
	window.dispatchEvent(new Event('resize'));
	
	$("head").append("<style>.inskinLoaded .home-edpicks-post img{max-width: " + cwidth + "px !important; min-width: " + cwidth + "px !important;}</style>");
	
	var top = $(".white-overlay-bigger").first().parent().height() - $(".white-overlay-bigger").first().height()
	$("head").append("<style>.inskinLoaded .white-overlay-bigger{top: " + top + "px !important;}</style>");
	$("head").append("<style>.inskinLoaded .home-edpicks-post{max-width: " + cwidth + "px !important;}</style>");
	
	$(".ism-frame").parent().css({
		"z-index" : "1000000"
	});
}

integration.on('adServed', function() {
    
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
      $("#inskinanchor").remove();
      window.dispatchEvent(new Event('resize'));
});