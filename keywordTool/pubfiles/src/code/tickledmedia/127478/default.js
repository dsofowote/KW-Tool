integration.meta = {
	'sectionID' : '127478',
	'siteName' : 'The Asian Parent - (Creative Approval) - Smartphone - ( ID IN MY PH SG TH )',
	'platform' : 'smartphone'
};




integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '726474',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit": true
};

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("body").addClass("inskinLoaded");
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .social-div{width: calc(60% - ' + integration.custom.FrameSideRight + 'px); margin-left: 0;}'
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
	});

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('.navbar').height();
		stylesCSS += '.inskinLoaded{margin-top:' + hHeight + 'px!important;}';
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<div data-glade data-ad-unit-path=\"/5272155/tap_ros_300x250_medrect_2nd\" height=\"250\" width=\"300\"></div>\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};
