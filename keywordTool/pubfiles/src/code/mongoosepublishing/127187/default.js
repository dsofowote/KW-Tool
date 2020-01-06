integration.meta = {
    'sectionID': '127187',
    'siteName': 'Timeout Penang - Desktop - (MY)',
    'platform': 'desktop'
};




integration.testParams = {
    'desktop_resolution': [1410]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '707587',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1150,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('head').append("<style>#header .sticky.fixed{position: relative;}</style>");
        $("head").append("<style>.navigation-wrapper.sticky-md, .navigation-wrapper.sticky-lg{left:0px;right:0px;}</style>");
        $("head").append("<style>.header-ad-panel.sticky{max-width:1150px;margin:0 auto;left:0px;right:0px;}</style>");
        $('header').css({
            "background-color": "transparent"
        });
        $('#header .sticky.fixed').css({
            "margin": "0 auto",
            "max-width": "1150px",
            "width": "100%"
        });
        $('.site-footer').css({
            "max-width": "1150px",
            "margin": "0 auto",
            "padding-left": "12px"
        });
        $("header, .navigation-wrapper").css({
            "max-width": "1150px",
            "margin": "0 auto",
            "left": "0",
            "right": "0"
        });
        $('.site-footer__utilities, .site-footer .container').css({
            "max-width": "1130px"
        });

        var navBar = $('#header .sticky.fixed').offset();

        $(window).scroll(function() {
            if ($(window).scrollTop() > $('.ism-frame').parent().height()) {
                $('#header .sticky.fixed').css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "right": "0",
                    "margin": "0 auto",
                    "max-width": "1150px",
                    "width": "100%"
                });
            } else {
                $('#header .sticky.fixed').css('position', 'static');
            }
        });
    }
});

	
/* Passback Tag */
window.ISMPassback = function() {
	//MUST ADD classRemover var to return string to make sure the site is not constrained when we do not serve
	var classRemover = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script><script id='inskinClassRemover'> var topBody = top.document.body; var test = $(topBody).removeClass('has_skin');</script>";
	return "" + classRemover + "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6717330/Time_Out_Penang//pageskin', [[1, 1], [1920, 1080]]).display();\n<\\script>";

};
