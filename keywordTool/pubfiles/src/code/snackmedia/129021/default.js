integration.meta = {
	'sectionID' : '129021',
	'siteName' : 'RugbyDump - Tablet- INT',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1045474',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight + 10;
		$("head").append("<style>.DAG-widget .DAG-magic-button{right: " + integration.custom.FrameSideRight + "px !important;}</style>");
		$('#main-content').css({
			'margin-top' : '180px'
		});

		$('body, #template').css({
			'overflow' : 'visible'
		});

		$('header#desktop-header .playerz-left, header#desktop-header .playerz-right').css({
			'visibility' : 'hidden'
		});

		$('header#desktop-header').css({
			'height' : '130px'
		});

		$('footer .playerz').css({
			'max-width' : '1320px',
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
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -hh1 - hh2,
				plr_StartScrollOnAnchor : true
			});
		}
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$('.rp-network > .container, #main-content > #content > .container').css({
				'margin' : '0',
				'padding-left' : '20px',
				'padding-right' : '95px'
			});
			
			$('footer .playerz').css({
				'margin' : '0px'
			});
			
			$('header, .header-games').css({
				'margin-left' : '-20px'
			});
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script>(function(w,t,d,s){d=w.document;w.ggv2id=t;s=d.createElement('script');s.async=true;s.src='https://js.gumgum.com/services.js';d.getElementsByTagName('head')[0].appendChild(s);}(top,'6abda043'));<\\script>";
};
