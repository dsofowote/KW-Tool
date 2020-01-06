integration.meta = {
	'sectionID' : '127209',
	'siteName' : 'Weatherzone - (CREATIVE APPROVAL) - Smartphone - (AU) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707731',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	    $("body").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">'; 
			 stylesCSS += '.inskinLoaded {}'; 
			 stylesCSS += '</style>' 
		$('head').append(stylesCSS); 
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	console.log(windowWidth);
	$("head").append("<style>.inskinLoaded .TBX_1.ob-widget, .inskinLoaded #anim_animation, .inskinLoaded #content{max-width: calc(100%);}</style>");
	$("head").append("<style>.inskinLoaded .ob-unit.ob-rec-text{max-width: calc(100%);}</style>");
    $("head").append("<style>.inskinLoaded #content > table *{width: initial;}</style>");
}

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});