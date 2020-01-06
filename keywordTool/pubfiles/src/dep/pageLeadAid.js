//Using layoutChange event as Init event does not have jQuery loaded and adCallResult is fired too early to set initial pagelead positioning
integration.on('layoutChange', function () {
    $('body').addClass('inskinLoaded');
    //Initialising variable to use for populating style tag
    var newValue = "";

    //Creates style tag and sets initial positioning of Pagelead
    var plCSS = '<style id="inskinPL" type="text/css">';
    plCSS += '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_initState + 'px !important;}';
    plCSS += '</style>';

    var formatHeight = $(".ism-anchor").outerHeight();
    var plICSS = '<style id="inskinPLI" type="text/css">';
    plICSS += '.inskinLoaded .ism-indicator{margin-top:' + formatHeight + 'px !important;}';
    plICSS += '</style>';

    var plCCSS = '<style id="inskinPLC" type="text/css">';
    plICSS += '</style>';

    $('head').append(plCSS);
    $('head').append(plICSS);
    $('head').append(plCCSS);

    //All parameters found below need to be defined in the adCallResult event ready for the relevant style tags to be rendered to the page on the layoutChange event
    //Scroll function with three options, engineer can use one of these to determine how to detect the nav's behaviour
    $(document).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
        if (integration.custom.pl_behaviour === "scroll") {
            //If based on scroll distance
            if (scrollTop >= integration.custom.pl_scroll) {
                //Push down Pagelead based on how far the user has scroll down
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState1 + 'px !important;}';
                newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState1 + 'px !important;}';
                newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState1 + 'px !important;}';
                $("#inskinPL").html(newValue);
            } else {
                //Re-adjust Pagelead's positioning when user is above the set scroll distance
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState2 + 'px !important;}';
                newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState2 + 'px !important;}';
                newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState2 + 'px !important;}';
                $("#inskinPL").html(newValue);
            }
        } else if (integration.custom.pl_behaviour === "class") {
            //If based on if CSS class is present
            if ($(integration.custom.pl_class).length >= 1) {
                //Push down Pagelead when selected class is present
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState1 + 'px !important;}';
                newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState1 + 'px !important;}';
                newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState1 + 'px !important;}';
                $("#inskinPL").html(newValue);
            } else if ($(integration.custom.pl_class).length == 0) {
                //Re-adjust positioning when the class is not present
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState2 + 'px !important;}';
                newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState2 + 'px !important;}';
                newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState2 + 'px !important;}';
                $("#inskinPL").html(newValue);
            }
        } else if (integration.custom.pl_behaviour === "property") {
            //If based on CSS property
            if ($(integration.custom.pl_class).css(integration.custom.elProperty) == integration.custom.elValue) {
                //Push down Pagelead when selected class has the set property and value present
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState1 + 'px !important;}';
                newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState1 + 'px !important;}';
                newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState1 + 'px !important;}';
                $("#inskinPL").html(newValue);
            } else {
                //Re-adjust positioning when selected class does not have the set property and value present
                newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.pl_scrollState2 + 'px !important;}';
                newValue += '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.pl_indState2 + 'px !important;}';
                newValue += '.inskinLoaded .ism-close{margin-top:' + integration.custom.pl_closeState2 + 'px !important;}';
                $("#inskinPL").html(newValue);
            }
        }
    });
});

integration.on('pagelead:layoutChange', function (e) {
    //This IF statement can be used to make changes related to when Pagelead is not fixed
    if (e.data.fixedTop == false) {
        //Stops all scrolling behaviours once Pagelead is no longer fixed
        integration.custom.pl_behaviour = "n/a";

            newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.headHeight + 'px !important;}';
            newIValue = '.inskinLoaded .ism-indicator{margin-top:' + integration.custom.indicatorPos + 'px}';
            newCValue = '.inskinLoaded .ism-close{margin-top:' + integration.custom.closePos + 'px}';

            $("#inskinPL").html(newValue);
            $("#inskinPLI").html(newIValue);
            $("#inskinPLC").html(newCValue);
            var formatHeight = $(".ism-anchor").outerHeight();

            $(document).on('scroll', function () {
                var scrollTop = $(document).scrollTop();
                //When below the format, adjust position of close button
                if (scrollTop > formatHeight) {
                    newCValue = '.inskinLoaded .ism-close{margin-top:' + integration.custom.closePos + 'px ;}';
                    $("#inskinPLC").html(newCValue);
                } else {
                    newCValue = '.inskinLoaded .ism-close{margin-top:0px;}';
                    $("#inskinPLC").html(newCValue);
                }
            });
        
    }
});