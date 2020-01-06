integration.meta = {
   'sectionID' : '126936',
   'siteName' : 'Economic Times - Desktop - (MENA)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1263]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '717173',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1003,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1940) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1003)/2; /* content width divided by 2 */
        $("#scrollTop").css({
            "right" : sideWidth + 20
        });
    } else {
        $("#scrollTop").css({
            "right" : "0"
        });
    }
}

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 1003)/2
		
		var rowCSS = "<style>#similarNews{right:"
		rowCSS += sideWidth;
		rowCSS += "px !important}</style>"
		$("head").append(rowCSS);
		
		$("head").append("<style>#topNavFixed.fixedNav{max-width:1003px;left:0px;right:0px;margin:0 auto}</style>");
		$(".cookie_info hidden").css({
			"max-width" : "1003px",
			"margin" : "0 auto"
		});
		$("#shareVert").css({
			"top" : "60px"
		});
		$("#similarNews").css({
			"right" : sideWidth
		});
		$(window).scroll(function (){
		   var width = $(window).width();
		   var sideWidth = (width - 1003)/2; /* content width divided by 2 */
	       $("#scrollTop").css({
	           "right" : sideWidth + 20
	       });	             
	    });
	
		/*Adjust social media buttons when user scrolls down*/
		$(window).bind('scroll', function() {
			if ($(window).scrollTop() > 100) {
				console.log('Scrolled');
				$("#shareVert").css({
					"top" : "100px",
					"right" : sideWidth
				});

			} else {
				console.log('Top');
				$("#shareVert").css({
					"top" : "135px",
					"right" : "0px"
				});
			}
		});
	}
});

/**** Move to-top-of-page button inside PageSkin when overlaps ****/

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "2000"
    });
});