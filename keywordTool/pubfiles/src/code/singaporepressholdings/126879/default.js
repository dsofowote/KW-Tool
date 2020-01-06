integration.meta = {
    'sectionID' : '126879',
    'siteName' : 'Home and Decor - Smartphone - (SG)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707132',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
    'plr_Responsive' : true,
    'plr_ShowCloseButton' : true,
    'plr_ContentType' : 'PAGESKINEXPRESS',
    'plr_UseFullVersion' : true,
    'plr_UseCreativeSettings' : true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
      $("body").addClass("inskinLoaded");
      var stylesCSS = '<style type="text/css">';
      stylesCSS += 'body.inskinLoaded, .inskinLoaded #article-listing-anchor-block-carousel > div > div.views-row{width: 100%;}';
      stylesCSS += '.inskinLoaded .carousel-title{min-width: auto;}';
      stylesCSS += '.inskinLoaded #newsletter-content{padding: 20px 5px 0 !important; width: 100% !important;}';
      stylesCSS += '.inskinLoaded #block-block-5 > div > div.visible-xs > div.copyright-connect.clearfix{width: 100%;}';
      stylesCSS += '.inskinLoaded div.carousel-share{bottom: 25px;}';
      stylesCSS += '.inskinLoaded #hnd_gallery_article_social_media_container{width: calc(100% - ' + integration.custom.PageSkinRightPanel + 'px) !important;}';
      stylesCSS += '.inskinLoaded .hnd-revamp-gallery-item{max-width: 100%;}';
      stylesCSS += '.inskinLoaded .views-field-field-prof-upload-photo-fid{max-width: 100%;}';
      stylesCSS += '.inskinLoaded .social-media.pull-left.clearfix{width: 100%;}';
      stylesCSS += '.inskinLoaded #related-blog-section .row .related-blog-content{padding-left: 2px; padding-right: 2px;}';
      stylesCSS += '.inskinLoaded .homepage-blog-nm-newsletter.left{height: initial;}';
      stylesCSS += '.inskinLoaded .article-thumbnail{height: initial; padding-bottom: 15px;}';
      stylesCSS += '.inskinLoaded .emotes--3S{margin-left: -9px;}';
      stylesCSS += '.inskinLoaded div[id^="google_ads_iframe"]{margin-left: -15px;}';
      stylesCSS += '.inskinLoaded #article-top-mpu{margin-left: -5px !important;}';
      stylesCSS += 'body.inskinLoaded{padding-right: 0px !important;}';
      stylesCSS += '</style>'
      $('head').append(stylesCSS);
    }
});

integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    $('#top-link').css({
        "right" : integration.custom.FrameSideRight + 10
    });
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "6"
    });
});

integration.on('layoutChange', function(e) {
	window.dispatchEvent(new Event('resize'));
});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    setTimeout(function(){window.dispatchEvent(new Event('resize'))}, 500);
});
