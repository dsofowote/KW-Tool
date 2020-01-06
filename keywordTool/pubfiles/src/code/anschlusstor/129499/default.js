integration.meta = {
    'sectionID' : '129499',
    'siteName' : ' Die Blaue 24 - Smartphone - (DE) ',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1082642',
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
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var width = $(window).width();
        var contentWidth = width - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded #topcontrol{right: ' + integration.custom.FrameSideRight + 'px !important; z-index: 4;}';
        stylesCSS += '.inskinLoaded #instagram-embed-1{min-width: 254px !important;}';
        stylesCSS += '.inskinLoaded table.font-small{width: ' + contentWidth + 'px !important; display: inline-block;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("layoutChange", function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.ePlayer();
    $(document).scroll(function() {
      integration.custom.ePlayer();
    });
});

integration.custom.ePlayer = function(){
  var popupAttr = $('#eplayer [id^="wrapper-eplayer-0827269a434cd6c4d50998696e-"]').attr("popuppadding");
  if (popupAttr == "50px") {
    var stylesCSS2 = '<style type="text/css">';
    stylesCSS2 += '.inskinLoaded #eplayer [id^="wrapper-eplayer-0827269a434cd6c4d50998696e-"]{right: ' + integration.custom.FrameSideRight + 'px !important;}';
    stylesCSS2 += '</style>'
    $('head').append(stylesCSS2);
  }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
