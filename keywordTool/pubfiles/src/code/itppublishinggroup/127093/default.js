integration.meta = {
   'sectionID' : '127093',
   'siteName' : 'Time Out Dubai - Desktop - (MENA) ',
   'platform' : 'desktop'
};

integration.testParams = {
   /* No Screen Resolution check */
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707461',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1110,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   "plr_StartScrollOnAnchor" : true,
   "plr_ScrollAdjustment" : 44
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headerHeight = $('.navbar-top').height();
        if ($(".navbar-top").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter(".navbar-top");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -217
            });
        } else {
        	$("<div id='inskinanchor'></div>").insertAfter(".main-menu-kids");
            integration.base.setCfg({
                plr_AnchorParent: "#inskinanchor",
                plr_PageHeightAdjustment: -217
            });
        }
        $('#inskinanchor').css({
            "margin-top": headerHeight
        });
        $('.content-page .sticky-anchor').css({
            "margin-top": "0"
        });
        $('footer, .footer-outer, .footer-links, .strap').css({
            "max-width": "1110px",
            "margin": "0 auto",
            "left": "0",
            "right": "0",
            "position": "relative"
        });
        $('#main960c, body').css({
            "background": "none"
        });
        $('#search > div').css({
            "width": "100%"
        });
        $('.main').css({
            "overflow": "visible"
        });        
        $(window).scroll(function() {
            var docScroll = $(window).scrollTop();
            console.log(docScroll);
            if (docScroll > 200) {
                integration.base.setCfg({
                    "plr_StartScrollOnAnchor": true,
                    "plr_ScrollAdjustment": 44,
                });
            } else {
                integration.base.setCfg({
                    "plr_StartScrollOnAnchor": true,
                    "plr_ScrollAdjustment": 217
                });
            }
        });
        
		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel(); 
    }
});
