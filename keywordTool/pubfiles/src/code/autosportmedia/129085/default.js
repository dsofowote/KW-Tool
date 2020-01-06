integration.meta = {
    'sectionID' : '129085',
    'siteName' : 'RideApart -Smartphone - (INT)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '1049146',
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
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 250);
        integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        var contentWidth = $(window).width() - integration.custom.FrameSideRight;
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .m1-header-ad{display:none;}';
        stylesCSS += '.inskinLoaded .m1-header-main, .inskinLoaded #floating_share_box, .inskinLoaded .homeTopSlider .lSSlideWrapper .item .info{width:' + contentWidth + 'px !important;}';
        stylesCSS += 'html.inskinLoaded, .inskinLoaded body{width: unset;}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adClose', function(e) {
    $('html').removeClass('inskinLoaded');
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 250);
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"\"text/javascript\"\"><!--\ngoogle_ad_client = \"\"ca-pub-5972703295500969\"\";\ngoogle_ad_width = 320;\ngoogle_ad_height = 100;\n//-->\n<\\script>\n<script type=\"\"text/javascript\"\"\nsrc=\"\"//pagead2.googlesyndication.com/pagead/show_ads.js\"\">\n<\\script>";
};