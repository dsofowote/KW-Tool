integration.meta = {
   'sectionID' : '126683',
   'siteName' : 'Gamesradar - Smartphone - (AU)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
   'mf_siteId' : '708004',
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
   	  $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '.inskinLoaded .primary-nav{position: relative;} .inskinLoaded .moreLatest-1-0, .moreLatest-0-0{margin-left: 0 !important; width: 100% !important;}';
      stylesCSS += '</style>';
      $('head').append(stylesCSS);
   }
});

integration.on('layoutChange', function(e) {
	  integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var stylesCSS = '<style type="text/css">';
    stylesCSS += '.inskinLoaded .next-prev-container{width: calc(100% - ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '.inskinLoaded .pagination.internal.current-prev-next.sticky-next-prev{width: calc(100% + ' + integration.custom.FrameSideRight + 'px)!important;}';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999"
	});
});


integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src=\"https://www.googletagservices.com/tag/js/gpt.js\">\n    googletag.pubads().definePassback(\"/10518929/Passback_GamesRadar/Inskin\", [320, 50]).display();\n<\\script>\n";
};
