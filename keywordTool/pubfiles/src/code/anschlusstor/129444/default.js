integration.meta = {
    'sectionID' : '129444',
    'siteName' : 'Die Blaue 24 - Desktop - (DE)',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1490]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1077860',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1170,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : '',
    'plr_FastInit': true
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      $('.footer-v8').css({'max-width':'1170px', 'margin':'0 auto'});
      $('.leaderboard').css({'display':'none'});
    }
});

/* Passback Tag */
window.ISMPassback = function() {
    return "  <script type=\"text/javascript\" language=\"JavaScript\">\n    (function()\n      {\n        var asm_pb_x = 728; /* CHANGE THIS VALUE ACCORDING TO CREATIVE WIDTH */\n        var asm_pb_y = 90; /* CHANGE THIS VALUE ACCORDING TO CREATIVE HEIGHT */\n        /* DO NOT CHANGE ANYTHING BELOW HERE */\n        var asm_amsname = \"anschlusstor_\";\n        var asm_kidid = 541;\n        function asm_sndMsg(x) {\n          var p = parent;\n          var dl = 0;\n          while (p != self && p != null && dl < 100) {\n            p.postMessage(x, \"*\");\n            p = p.parent;\n            dl++;\n          }\n        }\n        if (typeof(window.asm_bkfl_obj) != \"object\") {\n          asm_sndMsg(\"asm_bkfl:\" + asm_amsname + \";\" + asm_kidid + \";\" + asm_pb_x + \";\" + asm_pb_y);\n        } else {\n          window.asm_bkfl_obj.pushBack(asm_amsname, asm_kidid, asm_pb_x, asm_pb_y);\n        }\n      })\n    ()\n  <\\script>";
};
