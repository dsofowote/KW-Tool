integration.meta = {
    'sectionID' : '126954',
    'siteName' : 'CNBC  APAC - Desktop - ( ASIA AU NZ )',
    'platform' : 'desktop'
};

integration.testParams = {
    /* No Screen Resolution check */
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '721515',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1295,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
		'plr_PageHeightAdjustment' : -50
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $(".GlobalNavigation-container").outerHeight();
			$(" #MainContent, .Footer-container, .FeaturedBreaker-slideContainer").css({"margin": "0 auto", "max-width": "1290px"});
			$(".Footer-gridContainer").css({"padding": "0 10px"});
			$("#standalone-header").parent().css({"top": "0", "position": "absolute"});
            $(".TopBanner-container, #dart_wrapper_topbanner").css({"display": "none"});
            if ($(".Article").length == 1) {
                var headHeight1 = -($(".GlobalNavigation-container").outerHeight() + $(".PageBuilder-article").height()) ;
                $('.PageBuilder-pageRow ').css({'margin-top': headHeight, });
                $(" #MainContent").css({"margin": "0 auto", "max-width": "unset"});
                if ($("#main-article-header").length == 1) {
                    $("<div id='inskinanchor'></div>").insertBefore("#main-article-header");
                    integration.base.setCfg({
                        plr_AnchorParent : "#inskinanchor",
                        plr_PageHeightAdjustment : headHeight1 -2 ,


                    });
                }
                // $('head').append('<style type="text/css">.ism-anchor {margin-top : -220px !important;}</style>');
            }
            // $('.PageBuilder-pageRow ').css({'margin-top': '68px'});
            // if ($("#main-article-header").length == 1) {
            //     $("<div id='inskinanchor'></div>").insertBefore("#main-article-header");
            //     integration.base.setCfg({
            //         plr_AnchorParent : "#inskinanchor",
            //         // plr_PageHeightAdjustment : /*Enter minus value of navigation height here.*/,
            //     });
            // }
    }
});

integration.on('adServed', function(e) {
	var headHeight = $(".GlobalNavigation-container").outerHeight();
	$('head').append('<style type="text/css">.ism-anchor {margin-top : '+headHeight+'px !important;}</style>');
	$(document).scroll(function() {
		var headHeight = $(".GlobalNavigation-container").outerHeight();
		$('head').append('<style type="text/css">.ism-anchor {margin-top : '+headHeight+'px !important;}</style>');
    });
    if ($(".Article").length == 1) {
        var headHeight1 = -($(".GlobalNavigation-container").outerHeight() + $(".PageBuilder-article").height()) ;
        $('head').append('<style type="text/css">.ism-anchor {margin-top : ' + headHeight1 +'px !important;}</style>');
        $(document).scroll(function() {
            var headHeight1 = -($(".GlobalNavigation-container").outerHeight() + $(".PageBuilder-article").height()) ;
            $('head').append('<style type="text/css">.ism-anchor {margin-top : ' + headHeight1 +'px !important;}</style>');
            integration.base.setCfg({
                plr_ScrollAdjustment: -headHeight

            });
        });
    }

});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\">\n  var ord = window.ord || Math.floor(Math.random() * 1e16);\n  document.write('<script type=\"text/javascript\" src=\"http://ad.doubleclick.net/N2620/adj/nbcu.pass/cnbc_pubmaticuk_passback;site=cnbc;sz=728x90;ord=' + ord + '?\"><\\script>');\n<\\script>\n<noscript>\n<a href=\"http://ad.doubleclick.net/N2620/jump/nbcu.pass/cnbc_pubmaticuk_passback;site=cnbc;sz=728x90;ord=[timestamp]?\">\n<img src=\"http://ad.doubleclick.net/N2620/ad/nbcu.pass/cnbc_pubmaticuk_passback;site=cnbc;sz=728x90;ord=[timestamp]?\" width=\"728\" height=\"90\" />\n</a>\n</noscript>";
};
