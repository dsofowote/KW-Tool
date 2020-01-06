integration.meta = {
    'sectionID': '129020',
    'siteName': ' RugbyDump - Desktop - INT ',
    'platform': 'desktop'
};

integration.testParams = {
    'desktop_resolution': [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
    'mf_siteId': '1045473',
    'plr_PageAlignment': 'center',
    'plr_ContentW': 1320,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID': '',
    'plr_HideElementsByClass': '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {

        $('#main-content').css({
			'margin-top': '180px'
        });

        $('body, #template').css({
			'overflow': 'visible'
        });

        $('header#desktop-header .playerz-left, header#desktop-header .playerz-right').css({
			'visibility': 'hidden'
		});

        $('header#desktop-header').css({
			'height': '125px'
        });

        $('footer .playerz').css({
            'max-width': '1320px',
            "margin" : "0 auto",
            "left" : "0",
            "right" : "0"
        });

        var hh1 = $("#desktop-header").outerHeight();
        var hh2 = $(".header-games").outerHeight();
        var headHeight = hh1 + hh2;
        if ($("#desktop-header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#desktop-header");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -hh1 - hh2
            });

        }


    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'6abda043'));<\\script>";
};
