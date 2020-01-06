integration.meta = {
    'sectionID' : '129809',
    'siteName' : 'NT News - (Creative Approval) - Header Bidding - (AU)',
    'platform' : 'header bidding'
};

integration.params = {
    'mf_siteId' : '1088721',
    // DO NOT REMOVE CONTENT WIDTH FROM HERE - REQUIRED FOR DESKTOP
    'plr_ContentW': 1000,
    'srv_SectionID': '129809',
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_Multiwin': false

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        desktopIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });
            $('.ad-hybrid').css({'display':'none'});
            $('.tgc-headerv2_header, .tgc-headerv2-blackbar  ').css({'max-width':'1000px','margin':'0 auto'});
            // $('.reimagine-main').css({'padding-top':'0px'});

        }

        tabletIntegration = function() {
            integration.base.setCfg({
                'plr_ContentW' : 1000,
                'plr_PageAlignment' : 'center'
            });
            $('.ad-hybrid').css({'display':'none'});
            $('.tgc-headerv2_header ').css({'max-width':'1000px','margin':'0 auto', 'margin-top':'40px', 'left':'0px', 'right':'0px'});
            $('.tgc-headerv2-blackbar  ').css({'max-width':'1000px','margin':'0 auto', 'left':'0px', 'right':'0px'});


            if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
                integration.base.setCfg({
                    plr_PageAlignment : 'left'
                });
                integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
                $('.reimagine-main').css({'position':'relative', 'left' : -(integration.custom.FrameSideRight)/2});
                $('.tgc-headerv2_header, .tgc-headerv2-blackbar ').css({'left' : "-272px"});
            }
        }

        smartphoneIntegration = function() {
            integration.base.setCfg({
                'plr_FluidAnchor' : true,
                'plr_Responsive' : true
            });
            if ($(".tgc-headerv2").length == 1) {
                var navHeight = $(".tgc-headerv2").outerHeight();
                if (navHeight == 0){
                    //force a value incase user scrolled down and nav is collapsed/height calculated incorrectly
                    navHeight = 190
                }
                $("<div id='inskinanchor'></div>").insertAfter(".tgc-headerv2");
                integration.base.setCfg({
                    plr_AnchorParent: "#inskinanchor",
                    plr_PageHeightAdjustment: -navHeight
                });
            }

            $('html').addClass('inskinLoaded');
            var stylesCSS = '<style type="text/css">';
            stylesCSS += '.inskinLoaded {padding-right:76px !important;}';
            stylesCSS += '.inskinLoaded .breakout-left{margin:0px !important;}';
            stylesCSS += '</style>';
            $('head').append(stylesCSS);
            integration.on('adClose', function(e) {
                $('html').removeClass('inskinLoaded');
                $("#inskinanchor").remove();
            });
        }

        if(e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
            integration.base.setCfg({'plr_FixedTop' : true,'plr_EnableSwipe' : true,});

        }

        switch(e.data.device){
            case 'Desktop' :
                desktopIntegration();
                break;
            case 'Tablet' :
                tabletIntegration();
                break;
            case 'Smartphone' :
                smartphoneIntegration();
                break;
        }
    }
});