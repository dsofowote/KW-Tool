integration.meta = {
    'sectionID' : '126784',
    'siteName' : 'Cosmopolitan - Smartphone - (FR)',
    'platform' : 'smartphone'
};

integration.testParams = {
    'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '707086',
    'plr_FluidAnchor' : true,
    'plr_Fluid' : true,
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
    	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                "plr_AnchorParent" : "#inskinanchor",
            });
        }
        $("body").addClass("inskinLoaded");
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .SocialNetwork-serviceContainer{width: 80%;}';
        stylesCSS += '.inskinLoaded .ArticleContent-aside.ArticleContent-lastArticles .List .ArticleLink--small{margin-left: -10px;}';
        stylesCSS += '.inskinLoaded .SocialNetwork-services--primary{width: auto !important; margin-right: 8px;}';
        stylesCSS += '.inskinLoaded .SocialNetwork-service:not(:last-child){margin-right: 8px;}';
        stylesCSS += '.inskinLoaded .FooterLinks-item{margin-right: 3px;}';
        stylesCSS += '.inskinLoaded .FooterLinks-item:after{margin-left: 3px;}';
        stylesCSS += '.inskinLoaded .SocialLinks--footer .SocialLinks-linkContainer{margin-left: 5%; margin-right: 5%; margin-bottom: 5px;}';
        stylesCSS += '.inskinLoaded .NewsletterBox-formContainer > form{width: 100%;}';
        stylesCSS += '.inskinLoaded .NewsletterBox-formContainer > form > input:first-child{width: 78%;}';
        stylesCSS += '.inskinLoaded .NewsletterBox-formContainer > form > input:last-child{width: 18%;}';
        stylesCSS += '.inskinLoaded .External-container *{max-width: 100%;}';
        stylesCSS += '.inskinLoaded .SocialNetwork-wrapper{width: 100%;}';
        stylesCSS += '.inskinLoaded .MediaPlayer .insider{right: '+ integration.custom.FrameSideRight +'px !important;}';
        stylesCSS += '.inskinLoaded .AstrologySigns-item{margin-left: 20px !important;} .inskinLoaded .AstrologySigns-items{display: flex; flex-wrap: wrap;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }
});

integration.on("adServed", function(e) {
	setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 250);
});


integration.on('layoutChange', function(e) {
    integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
    integration.custom.laychange();
    $(window).on('resize', function() {
        integration.custom.laychange();
    });
    $('head').append('<style>.inskinLoaded #pulpix.px-sticky-widget-wrapper-mobile .px-sticky-widget{max-width: calc(100% - ' + integration.custom.FrameSideRight + 'px) !important;}</style>');
});

integration.custom.laychange = function() {
    var wwidth = $(window).width();
    var wheight = $(window).height();
    var cont = wwidth - integration.custom.FrameSideRight;
    var artimg = $('#page #body article .text img').width();
    /*For constraining article links*/
    var links = cont - (artimg / 2);
    var artsiz = artimg / 1.5;

    var heightAdjustment = $(".SiteHeader").height();
    integration.base.setCfg({
        plr_PageHeightAdjustment : "-" + heightAdjustment
    });

    $("head").append("<style>.inskinLoaded #body, .inskinLoaded .BodyContent, .inskinLoaded article, .inskinLoaded #page #body article .text img, .inskinLoaded #page a.thumbnail .img img, .inskinLoaded #page a.thumbnail span.title{max-width: " + cont + "px;}</style>");
    $("head").append("<style>.inskinLoaded [data-tip*='Votre e-mail']{max-width: " + links + "px; margin-left: 5px;}</style>");
    $("head").append("<style>.inskinLoaded .SocialNetwork-services--primary .SocialNetwork-service, .inskinLoaded .SocialNetwork-moreServices, .inskinLoaded .SocialNetwork.is-deployed .SocialNetwork-services--secondary .SocialNetwork-service{width: " + (cont / 8) + "px !important;}</style>");
    $("head").append("<style>.inskinLoaded .ArticleContent-aside.ArticleContent-lastArticles .List .ArticleLink--small{width: " + cont + "px;}</style>");

    // Resize fixed height of .ParentCollectionLinks-list
    var myArray = $(".ParentCollectionLinks-list > a");
    var myArraySlice = myArray.slice(0, 10);
    var totalHeight = 0;
    for ( i = 0; i < myArraySlice.length; i++) {
        totalHeight += $(myArraySlice[i]).outerHeight();
    }
    $("head").append("<style>.inskinLoaded .ParentCollectionLinks-list{height: " + totalHeight + "px !important;}</style>");
    if (wwidth > wheight) {
        $("head").append("<style>.inskinLoaded .socialbuttons, .inskinLoaded article > img, .inskinLoaded #page #body article .reagissez, .inskinLoaded #playerv5_box, .inskinLoaded .thisheaderisafooter{width: initial;}</style>");
    } else {
        $("head").append("<style>.inskinLoaded .socialbuttons, .inskinLoaded article > img, .inskinLoaded #page #body article .reagissez, .inskinLoaded #playerv5_box, .inskinLoaded .thisheaderisafooter{width: " + artsiz + "px; margin-left: 10px;}</style>");
    }
}

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
    $("#inskinanchor").remove();
    setTimeout(function(){window.dispatchEvent(new Event('resize'));}, 250);
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/COSMOPOLITAN/RG_MOBILE_/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};