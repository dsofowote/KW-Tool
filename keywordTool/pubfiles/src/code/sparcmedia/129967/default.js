integration.meta = {
    'sectionID' : '129967',
    'siteName' : 'Zee5 - (Publisher booking) - (Pagelead) - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    //'mf_siteId' : '', // AdZerk ID has not been created yet
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_ForceFrameBottom' : 0
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#headerMenu").height() + $("#scrollableHeader").outerHeight();
      //$("#my-banner").height()
        if ($(".headerInit").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".headerInit");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
      $("#inskinanchor").css({
    		"top" : headHeight,
    		"position" : "relative"
    	});

        }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .premium-button{z-index: 0 !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);

        window.unloadPageskin = function () {
			try {
				integration.destroy();
			} catch (e) {}
		};
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
        integration.custom.headHeight = $("#headerMenu").height() + $("#scrollableHeader").outerHeight();
        integration.custom.pl_scrollState1 = -$("#scrollableHeader").outerHeight();
        integration.custom.pl_scrollState2 = -$("#scrollableHeader").outerHeight();
        integration.custom.pl_behaviour = "class";
        integration.custom.pl_class = ".headerscrollVisible ";

    }
});


integration.on('pagelead:layoutChange', function (e) {
	if (e.data.fixedTop == false) {
		integration.custom.pl_behaviour = "n/a";
		newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top: 0px !important;}.inskinLoaded .site-header--fixed{top:0px}';
		$("#inskinPL").html(newValue);
	}
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
