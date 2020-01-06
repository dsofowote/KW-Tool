integration.meta = {
    'sectionID' : '129923',
    'siteName' : 'Parismatch.com  - Desktop - ( FR )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1098908',
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
        if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor",
                plr_ScrollAdjustment : -80,
                plr_PageHeightAdjustment : -150
			});
        }
        $("#header").css({"margin-bottom": "0px"});
        $(".sitefre").css({"display": "none"});
        $("#footer").css({"margin": "0 auto", "max-width": "1000px"});
        $("#social_sidebar").css({"top": "485px", "margin-left": "-20px"});
    }
});

integration.on('init', function() {
    var iframe = currentWindow.frameElement;
    iframe.height = "0";
    iframe.width = "0";
    iframe.parentElement.style.height = 0;
    iframe.parentElement.style.width = 0;
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type='text/javascript'>\n(function(){\np=function(e,t){\nt=t||{};var n=document.createElement('script');\nvar r='https:'==window.location.protocol?'https://':'http://';\nn.setAttribute('data-cfasync',false);\nn.src=r+'cdn.adikteev.com/lib/v3/aksdk.moment?t='+((new Date).getTime()/1e3/3600).toFixed();\nn.type='text/javascript';n.async='true';\nn.onload=n.onreadystatechange=function(){\nvar n=this.readyState;if(n&&n!='complete'&&n!='loaded')return;\ntry{top.AKSdk.init(e,t);top.AKSdk.call_action('suit'); }catch(r){}\n};\ntry{ var i=top.document.getElementsByTagName('script')[0];i.parentNode.insertBefore(n,i); }catch(e){};\n};\np({\"desktop\":\"-wjZsucBc4P7PbbGQf0CtS3ccojhSFxvGSnIm0DiOLw=\"},{});\n})()\nwindow.frameElement.style.display = \"none\";\nwindow.frameElement.parentNode.parentNode.style.display = \"none\";\n<\\script>";
};