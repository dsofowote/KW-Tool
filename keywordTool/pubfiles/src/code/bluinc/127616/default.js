integration.meta = {
	'sectionID' : '127616',
	'siteName' : 'Glam Lelaki - (Unpublished until approval) - Smartphone - ( MY )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768223',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .wrapper .container{padding-right:0px !important; padding-left:0px !important}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>'
	$('head').append(stylesCSS);
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	var postImageWidth = (contentWidth / 2) - 20;
	var newValue = "body.inskinLoaded{max-width: " + contentWidth + "px; min-width: " + contentWidth + "px;}";
	newValue += ".inskinLoaded .single-post article .theiaPostSlider_slides img {max-width: " + contentWidth + "px; min-width: " + contentWidth + "px;height:100%}";
	newValue += ".inskinLoaded .ico-plus{right:" + integration.custom.FrameSideRight + "px}";
	newValue += ".inskinLoaded ul.related_post li{max-width:" + postImageWidth + "px}";
	document.getElementById("inskinStyles").innerHTML = newValue;
}

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
