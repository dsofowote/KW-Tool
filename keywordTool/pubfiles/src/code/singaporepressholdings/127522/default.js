integration.meta = {
   'sectionID' : '127522',
   'siteName' : 'NUYOU - (CREATIVE APPROVAL) - Smartphone - (SG)',
   'platform' : 'smartphone'
};

integration.testParams = {
   'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '734577',
   'plr_FluidAnchor': true,
   'plr_Fluid': true,
   'plr_Responsive' : true,
   'plr_ShowCloseButton' : true,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
       $("body").addClass("inskinLoaded");
            var stylesCSS = '<style type="text/css">'; 
            stylesCSS += 'body.inskinLoaded {padding-right: 0 !important;}'; // Needed to prevent interstitial to break the layout.
            stylesCSS += '.inskinLoaded .facebook-album-wrapper{max-width: 100%;}';
            stylesCSS += '.inskinLoaded .featured-post iframe{min-width: 0px;}';
            stylesCSS += '.inskinLoaded .sbi_follow_btn, .inskinLoaded .sbi_follow_btn > a{max-width: 100%}';
            stylesCSS += '.inskinLoaded #content, .inskinLoaded #sidebar1{padding-left: 0px; padding-right: 0px;}';
            stylesCSS += '</style>' 
       $('head').append(stylesCSS);	
   }
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$("head").append("<style>.inskinLoaded .attachment-full, .inskinLoaded .ytp-thumbnail-overlay-image{
	    max-width: calc(100% - " + integration.custom.FrameSideRight + "px)
	}</style>");
});

integration.on('adClose', function(e) {
      $('body').removeClass('inskinLoaded');
});