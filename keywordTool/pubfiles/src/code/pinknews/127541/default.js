integration.meta = {
    'sectionID' : '127541',
    'siteName' : 'Pink News - Smartphone - ( INT )',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId' : '738197',
    'plr_FluidAnchor': true,
    'plr_Fluid': true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_ScrollAdjustment' : -48
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('html').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded {overflow-x: visible}';
        stylesCSS += '.inskinLoaded body {overflow: visible}';
        stylesCSS += '.inskinLoaded .ed-four-column-footer {position: initial !important}';
        // stylesCSS += '.inskinLoaded .slick-list {padding-right: 5% !important, padding-left: 5% !important}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on('adServed', function(e) {
	$(".ism-close").css({"z-index": 4});
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<div data-glade data-ad-unit-path=\"/21627008189/Background_Inskin/Inskin_Passback\" height=\"1\" width=\"1\"></div>\n\n<script async='async' src='https://securepubads.g.doubleclick.net/static/glade.js'><\\script>";
};

