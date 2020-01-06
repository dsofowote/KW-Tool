integration.meta = {
    'sectionID': '128730',
    'siteName': 'Hardware Zone - (PageLead Unpub until approv) - Smartphone - ( SG )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1032940',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive': true,
    'plr_ShowCloseButton': true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        var headHeight = $(".nav-mobile").outerHeight();
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .nav-header{z-index:110000}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index:1000 !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
        window.unloadPageskin = function () {
			try {
                integration.destroy();
                $('body').removeClass('inskinLoaded');
			} catch (e) {}
		};
    }
});

integration.on('adServed', function () {
    $('.ism-frame').parent().css({
        'z-index': '100000'
    });
});

integration.on('layoutChange', function (e) {
    var stylesCSS = '<style id="inskinPL" type="text/css">';
    stylesCSS += '</style>';
    $('head').append(stylesCSS);

    // integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    var newValue;
    var plFixed = true;
    var headHeight = $(".nav-mobile").outerHeight();

    $(document).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
        if (plFixed){
            if ($(".is-navSticky_show").length >= 1) {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
                $("#inskinPL").html(newValue);
            } else if ($(".is-navSticky").length >= 1 && $(".is-navSticky_show").length == 0) {
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + -headHeight + 'px !important;}';
                $("#inskinPL").html(newValue);
            }
        }
    });

    setTimeout(function(){
        plFixed = false;
         newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:0px !important;}';
         $("#inskinPL").html(newValue);
    }, 5000);
});

integration.on('adClose', function (e) {
    $('body').removeClass('inskinLoaded');
});