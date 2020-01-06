integration.meta = {
    'sectionID' : '129938',
    'siteName' : ' Petit fute - Desktop - (FR)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098912',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      var headHeight = $("#header-site").outerHeight();
      if ($("#header-site").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header-site");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_PageHeightAdjustment : -headHeight
            });
        }
        if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
    			integration.custom.isSuper = true;
    		}
        $("#inskinanchor").css({
        		"top" : headHeight,
        		"position" : "relative"
        });
        $('.home-top, #recherche_home, .footer-top, .section-concours, .section-store, .breadcrumb, #ancre-partir, #ancre-photo, .section-forum').css({
          "max-width" : "1000px",
          "margin" : "0 auto"
        });
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
    if (width < 1440 || integration.custom.isSuper) {
        var sideWidth = (width - 1000)/2;
        $(".icon-reseaux").css({
            "right" : sideWidth
        });
    } else {
        $(".icon-reseaux").css({
            "right" : "10px"
        });
    }
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div><script type='text/javascript'>\n(function(){\np=function(e,t){\nt=t||{};var n=document.createElement('script');\nvar r='https:'==window.location.protocol?'https://':'http://';\nn.setAttribute('data-cfasync',false);\nn.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed();\nn.type='text/javascript';n.async='true';\nn.onload=n.onreadystatechange=function(){\nvar n=this.readyState;if(n&&n!='complete'&&n!='loaded')return;\ntry{top.AKSdk.init(e,t);\ntop.AKSdk.call_action('default_read_article_hp' ); \ntop.AKSdk.call_action('default_read_article_rub' );\ntop.AKSdk.call_action('default_read_article_rub2' );\ntop.AKSdk.call_action('default_read_article' );\n}catch(r){}\n};\ntry{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){};\n};\np({\"desktop\":\"kYO3UYsl-ZZt7cFKy8cCdg==\",\"mobile\":\"kYO3UYsl-ZZt7cFKy8cCdg==\"},{});\n})()\n<\\script>";
};
