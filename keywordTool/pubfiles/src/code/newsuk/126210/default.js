integration.meta = {
	'sectionID' : '126210',
	'siteName' : 'The Sun - Desktop (UK)',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706951',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {

	if (e.data.hasSkin) {
	$(".back-to-top").css({"right": "53%"});

	$('head').append('<style type="text/css"> div.sun-header-bg.scrolling {max-width: 980px; margin:0 auto; left: 0px; right: 0px;}</style>');
	$(".billboard").css({"display" : "none"});

	var headerHeight = $('div.sun-header-bg').height();
	//console.log('headerHeight = ' + headerHeight);
	var stickyHeight = $('body > div.sun-container > section').height();
	//console.log('stickyHeight = ' + stickyHeight);
	var adjusterHeight = headerHeight + stickyHeight;
	//console.log('adjusterHeight = ' + adjusterHeight);
	var stickyBlackNav = $('div.sun-newsuk').height() + $('div.sun-extended-header').height();
	//console.log('stickyBlackNav = ' + stickyBlackNav);

	if ($("div.main-content-wrap").length == 1) {
			$("div.main-content-wrap").prepend("<div id='inskinanchor'></div>");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : - (stickyBlackNav + headerHeight - 30),
				plr_StartScrollOnAnchor : true
			});
		}

	if($('div.main-content-wrap.has-section-nav').length == 1){
		var $mainContainer = $('div.main-content-wrap.has-section-nav');
		var cPaddingTop = $mainContainer.css('padding-top');
		//console.log('cPaddingTop = ' + cPaddingTop);
	}

	$('.main-content-wrap').css({
		'margin-top' : '-20px'
	});

	$('div.main-content-wrap > div.billboard').css({
		'margin-top' : '10px'
	});


	$('.sun-grid-container--dark, .sun-grid-container--white, body > footer, .sun-grid-container--grey, div.sun-header-bg.scrolling').css({
		'max-width' : '980px',
		'margin' : '0 auto'
	});

	$('body > div.sun-container.theme-sport > div.sun-header-bg > div').hide();

		/*
		integration.custom.resizeEvent = 'Destroy';
		integration.custom.shortDestroy = 'Short-';
		$(window).resize(function() {
			integration.custom.resizeEvent = 'Destroy-After-Resize';
		});
		setTimeout(function(){
			integration.custom.shortDestroy = 'Standard-';
		}, 10000);
		integration.custom.removePageSkin = function() {
			integration.telemetry.recordCustom(integration.custom.shortDestroy + integration.custom.resizeEvent);
			$("body").removeClass("PageSkinDisplayed");
			integration.destroy();
		};
		window.parent.SUN.customAdCode = window.parent.SUN.customAdCode || {};

		window.parent.SUN.customAdCode.destroy = function() {
			integration.custom.removePageSkin();
		};
		$("body").css({
			"overflow-x" : "visible"
		});
		$("body").addClass("PageSkinDisplayed");
		$("head").append("<style> .PageSkinDisplayed #bodyMainHolder {max-width : 980px; margin: 0 auto; padding-left : 0px !important; padding-right: 0px !important;} </style>");
		$("head").append("<style> .PageSkinDisplayed .OUTBRAIN, .PageSkinDisplayed #leaderboardWrapper, .PageSkinDisplayed #copyrightPanel {max-width : 980px; margin : 0 auto;}</style>");
		*/
	}
});


integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});

integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width > 1240 || integration.custom.isSuper) { /* screen size of when button starts overlapping PageSkin */
		var sideWidth = (width - 970)/2;
		$("head").append("<style>body.brightcove--is-docked .brightcove--is-featured .video-js{right : "+ sideWidth +"px}</style>");
    } else {
		$("head").append("<style>body.brightcove--is-docked .brightcove--is-featured .video-js{right : "+ sideWidth +"px}</style>");
    }
}

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "20"
    });
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/3048/Sun_Rubicon_Passback', [970, 250]).display();\n<\\script>";
};