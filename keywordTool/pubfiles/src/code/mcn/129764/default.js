integration.meta = {
    'sectionID' : '129764',
    'siteName' : 'Sports TG - Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1087795',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded body{ margin: 0 !important}';
        stylesCSS += '.inskinLoaded footer{box-sizing: unset !important}';
        stylesCSS += '.inskinLoaded #content{margin-top: 55px !important}';
        stylesCSS += '.inskinLoaded #top-mob-ad{display: none !important}';
        stylesCSS += '.inskinLoaded .mytheme-bg{position: absolute !important; top: 0 !important}';

        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration._addPixel();
        if ($(".mytheme-bg").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".mytheme-bg");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
            });
        }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('.mytheme-bg').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
                        plr_PageHeightAdjustment : -headHeight,
                        plr_ScrollAdjustment: -headHeight
				})
});


integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});
