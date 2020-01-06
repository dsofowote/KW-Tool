integration.meta = {
   'sectionID' : '127467',
   'siteName' : 'VR-Zone - Smartphone - (SG)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725756',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
	    $("html").addClass("inskinLoaded");
			 var stylesCSS = '<style type="text/css">';
			 stylesCSS += '.inskinLoaded {overflow-y: visible}';
			 stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $("head").append("<style>.inskinLoaded #scroll-up{right: " + (integration.custom.FrameSideRight + 15) + "px;}</style>");
});

integration.on("adServed", function(e) {
	window.dispatchEvent(new Event('resize'));
});

integration.on('adClose', function(e) {
      $('html').removeClass('inskinLoaded');
      window.dispatchEvent(new Event('resize'));
});