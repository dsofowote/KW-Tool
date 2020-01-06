integration.meta = {
   'sectionID' : '127249',
   'siteName' : 'Now To Love - Smartphone - (AU)',
   'platform' : 'smartphone'
};




integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
   'mf_siteId' : '707610',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("div.header-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("div.header-wrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -54,
			});
			 $('body').addClass('inskinLoaded');
	      	var stylesCSS = '<style type="text/css">';
	      	stylesCSS += '.inskinLoaded .page{overflow-x: visible;} .inskinLoaded .off-canvas-wrapper{z-index: 10001;} .inskinLoaded .header{z-index: 100000000;} .inskinLoaded .sticky-block{max-width: 320px;}';
	      	// agreement to run bottom leaderboard over PageSkin
	      	stylesCSS += '.inskinLoaded .site-wrapper{z-index: 10000;} .inskinLoaded .ad--section-top-leaderboard{margin: 0px; max-width: 320px;}';
	      	// collapse top ad unit on publishers request
		$("#gpt-slot-0").hide();
		stylesCSS += '.inskinLoaded #gpt-slot-3{margin-left: -15px;} .inskinLoaded #gpt-slot-2{margin-left: -15px;}.inskinLoaded .content-wrapper{overflow : visible !important; z-index: 1000000000 !important;}';
	      	stylesCSS += '</style>';
	     	 $('head').append(stylesCSS);
		}
	}
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\ngoogletag.pubads().definePassback(\"/13534306/nowtolove\", [320,50]).display();\n<\\script>";
};

