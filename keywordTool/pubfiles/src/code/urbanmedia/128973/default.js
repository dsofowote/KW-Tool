integration.meta = {
    'sectionID' : '128973',
    'siteName' : 'Tagesspiegel - (Pagelead) - Smartphone - ( AT CH DE )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1044191',
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
        var headHeight = $(".ts-header").height();
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ts-main-nav{z-index: 11;}';
        stylesCSS += 'body.inskinLoaded{padding-top: ' + headHeight + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    var height = $(document).scrollTop();
  	$(window).scroll(function() {
      		if ($(".ism-frame:first").css("position") === "fixed") {
      			$(".ism-frame").parent().css({
      				"z-index" : "10"
      			});
            $(".ts-header").removeClass("ts-is-sticky");
      		} else if( height == 0 ){
            $(".ts-header").removeClass("ts-is-sticky");
          } else {
      			$(".ism-frame").parent().css({
      				"z-index" : "auto"
      			});
            $(".ts-header").addClass("ts-is-sticky");
      		}
  	})

});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
