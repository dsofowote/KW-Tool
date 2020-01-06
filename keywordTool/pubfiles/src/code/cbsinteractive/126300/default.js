integration.meta = {
	'sectionID' : '126300',
	'siteName' : 'TV.com - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	
	
	'mf_siteId' : '706917',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_PageAlignment' : '',
	'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {	 
	 if (e.data.hasSkin) {
         $('html').addClass('inskinLoaded');
         var stylesCSS = '<style type="text/css">';
         stylesCSS += '.inskinLoaded #page, .inskinLoaded #show{position: relative;}';
         stylesCSS += '.inskinLoaded .show_header > .center > img, .inskinLoaded .show_header > .center {width: 100%;}';
         stylesCSS += '.inskinLoaded #mobile_panner_top{min-height: 0; height: 0; padding: 0;}';
         var shareHeight = $(".share_box").height();
         /*stylesCSS += '.inskinLoaded #page{padding-bottom: ' + shareHeight + 'px !important;}';*/
         stylesCSS += '.inskinLoaded body > iframe[visibility = hidden]{display: none;}';
         stylesCSS += '</style>';
         $('head').append(stylesCSS);
         
         var stylesCSS2 = '<style id="inskinEventStyles1" type="text/css">';
         stylesCSS2 += '</style>';
         $('head').append(stylesCSS2);
     }
});

integration.on('layoutChange', function(e) {	
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.PageSkinBottomPanel = e.data.plr_FrameBottom;
    $("head").append("<style>.inskinLoaded .share_box{max-width: calc(100% - " + integration.custom.FrameSideRight + "px);}</style>");
    $(".ism-frame").parent().css({
       "z-index" : "1001" 
    });
	integration.custom.ismresize();
    $(window).on("resize",function(){
        integration.custom.ismresize();
    });    
    $("head").append("<style>.inskinLoaded .share_box{;}</style>");
});

integration.custom.ismresize = function(){
	var width = $(window).width();
    $("head").append("<style>.inskinLoaded #mobile .story_article img{max-width: calc(" + width + "px - " + integration.custom.FrameSideRight + "px - 20px) !important;}</style>");
}

integration.on('adClose', function(e) {
      $('html').removeClass('inskinLoaded');
      $('#inskinEventStyles1').remove();
});
