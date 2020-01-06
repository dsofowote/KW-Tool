integration.meta = {
   'sectionID' : '128125',
   'siteName' : 'MY Women\'s Weekly - (Unpublished until approval) - Smartphone - (MY) ',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1001117',
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
      var headHeight = $("#slogo").height();
      $('body').addClass('inskinLoaded');
      var stylesCSS = '<style type="text/css">';
      stylesCSS += '@media only screen and (max-width: 375px){.inskinLoaded #Default_HalfPage, .inskinLoaded #health_MobileLeaderboard, .inskinLoaded #Default_MobileLeaderboard{margin-left: -9px;}}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);

      if ($("#menuf").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#menuf");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight,
            });
        }
      $("#inskinanchor").css({
      		"top" : headHeight,
      		"position" : "relative"
      	});
   }
});

integration.on('layoutChange', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.on('adClose', function(e) {
   $('body').removeClass('inskinLoaded');
});
