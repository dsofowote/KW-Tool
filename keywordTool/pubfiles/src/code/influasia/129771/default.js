integration.meta = {
    'sectionID' : '129771',
    'siteName' : 'WorldofBuzz - Smartphone - (MY US PH SG AU UK)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1088007', // AdZerk ID has not been created yet
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
        var stylesCSS = '<style type="text/css">';
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        stylesCSS += '.inskinLoaded html{overflow-x: visible !important}';
        stylesCSS += '.inskinLoaded #mvp-site, #mvp-site-wall{overflow: visible !important}';
        stylesCSS += '.inskinLoaded #mvp-main-nav-wrap{width: 125% !important}';
        stylesCSS += '.inskinLoaded #res-img{width: auto !important; max-width: 375px}';
        stylesCSS += '.inskinLoaded #mvp-main-body-wrap{padding-top: 57px !important}';
        stylesCSS += '.inskinLoaded .the_champ_sharing_container{width: ' + contentWidth + 'px !important}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 10000001 !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        if ($("#mvp-main-body-wrap").length == 1) {
              $("<div id='inskinanchor'></div>").insertBefore("#mvp-main-body-wrap");
              integration.base.setCfg({
                  plr_AnchorParent : "#inskinanchor",
                  plr_ScrollAdjustment : -50
              });
          }
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	var headHeight = $('header').height() ;
  var wholeHeight = $('header').height() + $('#res-img').height();
      $(".ism-frame").parent().css({"top" : headHeight});
			integration.base.setCfg({
						plr_PageHeightAdjustment : -wholeHeight,
				})
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\nvar sublime = sublime || {};\nsublime.pixelImpression = '%%VIEW_URL_ESC%%';\nsublime.pixelClick = '%%CLICK_URL_ESC%%';\n<\\script>\n<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=24132\"><\\script>";
};