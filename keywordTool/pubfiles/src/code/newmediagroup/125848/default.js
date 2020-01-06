integration.meta = {
    'sectionID' : '125848',
    'siteName' : 'Oriental Sunday - Smartphone - (HK) ',
    'platform' : 'smartphone'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
    'mobile_resolution' : [395]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1016661',
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
        var headHeight = $(".post-header").height();
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        var mpusLeft = $(".container.container--main").css("padding-left");

        if ($(".post-header").length == 1) {
          $("<div id='inskinanchor'></div>").insertBefore("#page");
          integration.base.setCfg({
            plr_AnchorParent : "#inskinanchor",
            plr_PageHeightAdjustment : -headHeight
          });
        }
        $("#inskinanchor").css({
          "top" : headHeight,
          "position" : "relative"
        });
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded #page{margin-top: 51px;}';
        stylesCSS += '.inskinLoaded .navigation--mobile{z-index: 10001 !important;}';
        stylesCSS += '.inskinLoaded .post-header, .inskinLoaded .fixed_ft_ad{z-index: 10001;}';
        stylesCSS += '.inskinLoaded .fixed_ft_ad{width: ' + contentWidth + 'px; min-width: 320px;}';
     		stylesCSS += 'body.inskinLoaded, .inskinLoaded .footer_fixed {max-width: ' + contentWidth + 'px;}';
    		stylesCSS += '.inskinLoaded div[id^="div-gpt-ad"]{margin-left: -' + mpusLeft + ';}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }
});

integration.on('adServed', function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "10000"
    });
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});
