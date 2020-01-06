integration.meta = {
	'sectionID' : '127054',
	'siteName' : 'BiTES - Mobile - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708058',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ShowCloseButton' : true,
	'plr_Responsive' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #top-link{right: ' + integration.custom.FrameSideRight + 'px !important}';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);

	integration.custom.Adjusted = false;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});

});

integration.on("adClose", function(e) {
var windowWidth = $(window).width();
$("body").removeClass("inskinLoaded");
$(".owl-carousel .owl-item").css({
	"min-width" : windowWidth
});
//$("#inskinanchor").remove();
});


integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	if (windowWidth < windowHeight && integration.custom.Adjusted == false) {
		//portrait
		var newValue = ".inskinLoaded .owl-carousel .owl-item{width: " + contentWidth + "px !important; margin-right: " + integration.custom.FrameSideRight + "px !important}";
		document.getElementById("inskinStyles").innerHTML = newValue;
		integration.custom.Adjusted = true;
	} else if (integration.custom.Adjusted){
		//landscape
		var newValue = ".inskinLoaded .owl-carousel .owl-item{width: " + contentWidth + "px !important; margin-right: 0px !important}";
		document.getElementById("inskinStyles").innerHTML = newValue;
	}

}
