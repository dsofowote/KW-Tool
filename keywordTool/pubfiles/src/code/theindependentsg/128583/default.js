integration.meta = {
    sectionID: "128583",
    siteName: "The Independent SG - Desktop - ( SG )",
    platform: "desktop"
};
integration.testParams = {
    desktop_resolution: [1340]
};
integration.flaggedTests = [];
integration.params = {
    mf_siteId: "1024298",
    plr_PageAlignment: "center",
    plr_ContentW: 1080,
    plr_ContentType: "PAGESKINEXPRESS",
    plr_UseFullVersion: true,
    plr_UseCreativeSettings: true,
    plr_HideElementsByID: "",
    plr_HideElementsByClass: "",
    plr_FastInit: true
};
integration.on("adCallResult", function (e) {
    if (e.data.hasSkin) {
        $(".td-header-wrap, #td-outer-wrap").css({
            "max-width": "1080px",
            margin: "0 auto"
        })
    }
});