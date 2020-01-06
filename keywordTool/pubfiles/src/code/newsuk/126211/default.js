integration.meta = {
	'sectionID' : '126211',
	'siteName' : 'The Sun - Tablet - (UK) - (SSL)',
	'platform' : 'tablet'
 };

 integration.testParams = {
 };

 integration.flaggedTests = [];

 integration.params = {
	'plr_PageAlignment' : 'center',
	'plr_ContentW': 960,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
 };

 integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#main-content").css({"margin": "0 auto", "max-width": "980px"});
		 var headerHeight = $('div.sun-header-bg').height();
		 //console.log('headerHeight = ' + headerHeight);
		 var stickyHeight = $('body > div.sun-container > section').height();
		 //console.log('stickyHeight = ' + stickyHeight);
		 var adjusterHeight = headerHeight + stickyHeight;
		 //console.log('adjusterHeight = ' + adjusterHeight);
		 var stickyBlackNav = $('div.sun-newsuk').height();
		 //console.log('stickyBlackNav = ' + stickyBlackNav);

		 if ($("div.main-content-wrap").length == 1) {
				 $("div.main-content-wrap").prepend("<div id='inskinanchor'></div>");
				 integration.base.setCfg({
					 plr_AnchorParent : "#inskinanchor",
					 plr_PageHeightAdjustment : - (stickyBlackNav + headerHeight - 30),
					 plr_StartScrollOnAnchor : true
				 });
			 }

		 $('.billboard').css({
			 'margin-top' : '10px'
		 });

		 $('.main-content-wrap').css({
			 'margin-top' : '-20px'
		 });

		 if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			  /* PageSkin Edge specific changes */
			  integration.base.setCfg({ 'plr_PageAlignment' : 'left' });

			  $('.main-content-wrap').css({
				  'min-width' : '960px',
				  'max-width' : '960px'
			  });
			  $('footer').css({
				 'max-width' : '960px'
			  });
		 }

		 $('body').css({
			 'overflow-y' : 'visible'
		 });
	}
 });

 integration.on('layoutChange', function(e) {

	 integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	 integration.custom.FrameSideLeft = e.data.plr_FrameSide;
	 integration.custom.FrameTop = e.data.plr_FrameTop;

	 var bodyWidth = 960 + integration.custom.FrameSideLeft + integration.custom.FrameSideRight;

	 if(integration.custom.FrameSideRight > 200){
		 $('body').css({
			 'min-width' : bodyWidth - integration.custom.FrameSideLeft + 'px'
		 });

		 $('.sun-header--nav,  .sun-header--wrap, .sun-header--nav-wrap, .sub-nav__container ').css({
			 'min-width' : bodyWidth + 'px'
		 });

		 $('body > div.sun-container.theme-main > div.sun-header-bg').css({
			 'min-width' : bodyWidth + 'px',
			 'margin-left' : -integration.custom.FrameSideLeft + 'px'
		 });

		 $('.sun-header-bg').css({
			 'margin-left' : -integration.custom.FrameSideLeft + 'px'
		 });

		 $('.sun-header--nav, .sun-header--wrap').css({
			 'left' : '0px',
			 'margin-left' : '0px'
		 });

		 $('.sun-newsuk > .sun-row').css({
			 'margin-left' : - integration.custom.FrameSideLeft + 'px'
		 });

		 $('.sun-newsuk').css({
			 'max-width' : bodyWidth + 'px',
			 'margin-left' : - integration.custom.FrameSideLeft + 'px'
		 });

		 $('.sub-nav__container').css({
			 'margin-left' : - integration.custom.FrameSideLeft + 'px'
		 });

		 $('head').append('<style type="text/css">.sun-header__mini {margin-left: 20px !important; min-width: 960px !important;}</style>');

	 }else{
		 $('body').css({
			 'min-width' : bodyWidth + 'px'
		 });

		 $('.sun-header--nav,  .sun-header--wrap, .sun-header--nav-wrap, .sub-nav__container ').css({
			 'min-width' : bodyWidth + 'px'
		 });

		 $('body > div.sun-container.theme-main > div.sun-header-bg').css({
			 'min-width' : bodyWidth + 'px'
		 });

		 $('.sun-header--nav, .sun-header--wrap').css({
			 'left' : '0px',
			 'margin-left' : '0px'
		 });

		 $('.sun-newsuk > .sun-row').css({
			 'margin-left' : '0px'
		 });

		 $('head').append('<style type="text/css">.sun-header__mini {left:0 !important; right: 0px !important;  margin: 0 auto !important; min-width: 960px !important;}</style>');

	 }
 });

 integration.on("adServed", function(e) {

	 $(".ism-frame").parent().css({
		 "z-index" : "1000"
	 });
 });
