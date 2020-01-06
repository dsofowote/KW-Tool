integration.meta = {
    'sectionID' : '127488',
    'siteName' : 'Kiis Network- Smartphone - (AU)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
    'mf_siteId' : '726704',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .po-slider-articles{width:' + contentWidth + 'px;}';
        stylesCSS += '.inskinLoaded .po-audio-player__main-container{position: relative;}';
        stylesCSS += '.inskinLoaded .po-audio-player__spacer--is-visible{height: 0;}';
        stylesCSS += '.inskinLoaded #main-body-container{padding-top: 0;}';
        stylesCSS += '.inskinLoaded #primary-nav{z-index: 12;}';
        stylesCSS += '.inskinLoaded .module-now-playing-toggle-close{right: 30px;}';
        stylesCSS += '.inskinLoaded .icon-down-dir{right: 10px; position: relative;}';
        stylesCSS += '.inskinLoaded .social-list{width: 60%;}';
        stylesCSS += '.inskinLoaded #menu{z-index: 5;}';
        stylesCSS += '.inskinLoaded .instagram-media{width:' + (contentWidth - 20) + 'px !important; min-width:' + (contentWidth - 20) + 'px !important;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
        window.unloadPageskin = function() {
          try {
            integration.destroy();
          } catch(e) {
          };
        }
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.laychange();
    $(window).on('resize', function() {
        integration.custom.laychange();
    });
});

integration.custom.laychange = function() {
    if ($(window).width() < 400) {
        $("head").append("<style>.inskinLoaded .module-article-m.share-item, .inskinLoaded .uppercase.article-title{margin-left: -10px;}</style>");
    } else {
        $("head").append("<style>.inskinLoaded .module-article-m.share-item, .inskinLoaded .uppercase.article-title{margin-left: auto;}</style>");
    }
}

integration.on("adServed", function(e) {
    var headHeight = $("#primary-nav").outerHeight();
    $(".ism-frame").parent().css({
        "top" : headHeight
    });
    integration.base.setCfg({
        plr_PageHeightAdjustment : -headHeight
    });
});


integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\"><!--\ngoogle_ad_client = \"ca-pub-4261758103850511\";\n/* INSkin_320x50_Passback */\ngoogle_ad_slot = \"5136020656\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 50;\n//-->\n<\\script>\n<script type=\"text/javascript\"\nsrc=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\n<\\script>";
};
