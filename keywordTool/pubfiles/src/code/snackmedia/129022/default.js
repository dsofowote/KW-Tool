integration.meta = {
    'sectionID' : '129022',
    'siteName' : 'RugbyDump - Smartphone - INT',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1045475',
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
      integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
      if ($("#template > #mobile-header").length == 1) {
        $("<div id='inskinanchor'></div>").insertAfter("#template > #mobile-header");
        integration.base.setCfg({
          plr_AnchorParent : "#inskinanchor",
          plr_StartScrollOnAnchor : true,
          'plr_PageHeightAdjustment' : -55
        });
      }
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .DAG-widget .DAG-magic-button{right: ' + integration.custom.FrameSideRight + 'px !important;}';
        stylesCSS += '.inskinLoaded #template{overflow: visible !important;}';
        stylesCSS += '.inskinLoaded .mobile-menu-base .social{margin-left: 10px !important;}';
        stylesCSS += '.inskinLoaded header#mobile-header{width: calc(100% + ' + integration.custom.FrameSideRight + 'px);}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'6abda043'));<\\script>";
};
