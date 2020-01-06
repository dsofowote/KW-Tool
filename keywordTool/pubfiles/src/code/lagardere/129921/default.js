integration.meta = {
    'sectionID' : '129921',
    'siteName' : 'Europe1 - Desktop - ( FR )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1096912',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 970,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        var headHeight = $('nav').height();
    var headHeight1 = $('#player').outerHeight();
        $('footer').css({'max-width':'970px', 'margin':'0 auto', 'float': 'none'});
        // $('head').append('<style>.banner{display: table-column !important}</style>');

        $('.banner').css({'display':'table-column'});
        $('body').css({'overflow-x':'visible'});
        if ($("#header").length == 1) {
            $("<div id='inskinanchor'></div>").insertAfter("#header");
            integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                // plr_PageHeightAdjustment : /*Enter minus value of navigation height here.*/,
            });
            $("#inskinanchor").css({
                "top" : headHeight1,
                "position" : "relative"
            });
        }
    //     try {
    //         var dates = new Date();
    //         window.parent.unloadPageskin = function () {
    //             console.log("destroy fires", dates);
    //             integration.base.destroy();
    //         };
    //     } catch (err) {
    //         console.log(err)
    //     }
    }
});

integration.on("adServed", function(e) {
    var headHeight1 = $('#player').outerHeight();
    $("#controls").on("click", function(){
        $(".ism-anchor").css({"top" : -headHeight1 });
        $('.header-space').css({'display':'none'})
      });

});

integration.on('init', function() {
    var dates = new Date();

    console.log("init collapse", dates);
    var iframe = currentWindow.frameElement;
    iframe.height = "0";
    iframe.width = "0";
    iframe.parentElement.style.height = 0;
    iframe.parentElement.style.width = 0;
    try {
        var dates = new Date();
        window.parent.unloadPageskin = function () {
            console.log("destroy fires", dates);
            integration.base.destroy();
        };
    } catch (err) {
        console.log(err)
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<div id='akv-overlay'></div>\n<script id='aksdk' type='text/javascript'>\n    (function(e,t){\n    t=t||{};var n=document.createElement('script');\n    var r='https:'==window.location.protocol?'https://':'http://';\n    n.setAttribute('data-cfasync',false);\n    n.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed();\n    n.type='text/javascript';n.async='true';\n    n.onload=n.onreadystatechange=function(){\n    var n=this.readyState;if(n&&n!='complete'&&n!='loaded')return;\n    try{top.AKSdk.init(e,t);top.AKSdk.call_action('default_suit'); }catch(r){}\n    };\n    try{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){};\n    })({\"desktop\":\"8JnMK0OHMcM717HSZEdeX7y4a3ptkwBPEvztCrEgEsU=\"},{});\nwindow.frameElement.parentNode.parentElement.style.display =\"none\";\n<\\script>";
};
