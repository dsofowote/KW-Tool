integration.meta = {
   'sectionID' : '126825',
   'siteName' : 'Just Run Lah - Smartphone - (Asia)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707097',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
  if (e.data.hasSkin) {
	  $("body").addClass("inskinLoaded");
		   var stylesCSS = '<style type="text/css">'; 
		   stylesCSS += '.inskinLoaded #wonderplugincarousel-1 > div.amazingcarousel-list-container{width: 100%;}';
		   stylesCSS += '.inskinLoaded #td-outer-wrap > div.td-transition-content-and-menu.td-content-wrap > div.td-main-content-wrap.td-main-page-wrap > div > div{width: 100%;}';
		   stylesCSS += '.inskinLoaded #td-outer-wrap > div.td-transition-content-and-menu.td-content-wrap > div.td-main-content-wrap.td-main-page-wrap > div > div{left: 0;}';
		   stylesCSS += '.inskinLoaded .td-social-pinterest, .inskinLoaded .td-social-sharing-buttons{margin-right: -3px;}';
		   stylesCSS += '.inskinLoaded .amazingcarousel-list-wrapper{width: 100% !important;}';
		   stylesCSS += '.inskinLoaded #td-outer-wrap{overflow: hidden;}';
		   stylesCSS += '.inskinLoaded .amazingcarousel-list-container{width: 100% !important;}';
		   stylesCSS += '.inskinLoaded .amazingcarousel-list-container *{width: 100% !important;}';
		   stylesCSS += '</style>' 
	  $('head').append(stylesCSS); 
  }
});

integration.on('layoutChange', function(e) {
       integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
       $("head").append("<style>.inskinLoaded .td-affix{max-width: calc(100% - " + integration.custom.FrameSideRight  + "px);}</style>");
       
       cwidth = ($(window).width() - integration.custom.FrameSideRight)
       $("head").append("<style>.inskinLoaded .vc_row.wpb_row.td-pb-row.td-homepage-full-row{max-width: " + cwidth + "px; padding-right: 10px !important;}</style>");
       $("head").append("<style>.inskinLoaded .vc_row.wpb_row.td-pb-row{max-width: " + cwidth + "px; padding-right: 10px !important;}</style>");
       
       integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
       $("head").append("<style>.inskinLoaded #td-mobile-nav{top: " + integration.custom.PageSkinTopPanel + "px;}</style>");
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});