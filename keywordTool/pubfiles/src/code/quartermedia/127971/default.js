integration.meta = {
	'sectionID' : '127971',
	'siteName' : 'Golfpost - Smartphone - ( DE )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '958648',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .navbar.navbar-default.navbar-fixed-bottom.visible-xs{max-height:0px;min-height:0px;}';
		stylesCSS += '.inskinLoaded #articleBody h2{word-wrap:break-word;}';
		stylesCSS += '.inskinLoaded #articleBody ul{margin-left:10px;}';
		stylesCSS += '.form-group.form-inline.font2.pad10.martop10.bgCol0 .col-xs-4{width:100%}'
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	var stylesCSS = '<style id="inskinStyles" type="text/css">';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);

	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});

});

integration.on("adClose", function(e) {
$("body").removeClass("inskinLoaded");
//$("#inskinanchor").remove();
});

integration.custom.laychange = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;

	//40px less to account for margin & padding
	var newValue = ".inskinLoaded .wp-caption.alignright{max-width: " + (contentWidth - 40) + "px;height:100%}";
	
	document.getElementById("inskinStyles").innerHTML = newValue;
}
