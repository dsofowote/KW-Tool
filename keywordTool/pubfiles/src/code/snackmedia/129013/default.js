integration.meta = {
    'sectionID' : '129013',
    'siteName' : 'RugbyPass - Smartphone - (INT) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045466',
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
        $('html').addClass('inskinLoaded');
        var headerHeight = $('.mobile-header').height();
        var stylesCSS = '<style type="text/css">';
        integration.custom.PageSkinFrameSide = e.data.plr_FrameSideRight;
        integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
        stylesCSS += '.inskinLoaded body{overflow: visible}';
        stylesCSS += '.inskinLoaded .show-menu header .container{top: -' + integration.custom.PageSkinTopPanel + 'px !important;}';
    	stylesCSS += '.inskinLoaded .show-menu header .container{width: calc(100% + ' + integration.custom.PageSkinFrameSide + 'px) !important;}';
        stylesCSS += '.inskinLoaded footer {padding-top: 40px;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        integration.base.setCfg({
          plr_PageHeightAdjustment: -headerHeight
        });
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'14ac3a73'));<\\script>";
};
