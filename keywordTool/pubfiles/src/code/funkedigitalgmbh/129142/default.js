integration.meta = {
    'sectionID' : '129142',
    'siteName' : 'Der Westen - Desktop - ( AT CH DE )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1280]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1058454',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 960,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_CheckOptOut' : true,
    'plr_ConsentString' : 'BOevd0nOevd0nAKABBENBxoAAAAiCAJgAUABYAFQALgAZABAADIAIgATgCEA',
    'plr_URLKeywords' : 1,
    'plr_FastInit' : true

};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
    }

    integration.on("layoutChange", function(e) {
        integration.custom.floatingButtons();
        $(window).resize(function() {
            integration.custom.floatingButtons();
        });
            integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
            integration.custom.InSkinBottomNav();
            $( document ).scroll(function() {
                integration.custom.InSkinBottomNav();
            });
    });

    integration.custom.floatingButtons = function() {
    	var width = $(window).width();
    	if (width > 1200 || integration.custom.isSuper) {/* screen size of when button starts overlapping PageSkin */
    		var sideWidth = (width - 960) / 2;

    		$("body").append('<style>.cleverpush-bell{left: ' + sideWidth + 'px !important; bottom: 100px}</style>');
    	} else {
    		$("body").append('<style>.cleverpush-bell{left: ' + sideWidth + 'px !important; bottom: 100px}</style>');

    	}
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>\n\n    if (typeof parent.fd_inskin_create_passback !== 'undefined') {\n\n        parent.fd_inskin_create_passback();\n\n    }\n\n<\\script>";
};
