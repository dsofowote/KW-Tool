//Content Design Functions
var Pagepos = 0;
var CurrentPage;
var keyPos;
var sectPos;
var wordPos;
var contentSizing = function (mode) {
    var windowHeight = $(window).outerHeight();
    var headHeight = $(".top-bar").outerHeight();
    var contentHeight = windowHeight - 200
    var contentHeightx = windowHeight - headHeight
    $(".contentBox, .keywordBox, .sectionBox").css({
        "max-height": contentHeight
    })
    $(".main-wrapper").css({
        "height": windowHeight - headHeight
    });

    if (mode == 1) {
        $(".zone-item").click(function () {
            console.log(keyPos, sectPos, wordPos);
            keyPos = $(".keyList")[0].offsetTop;
            sectPos = $(".sectionList")[0].offsetTop;
            wordPos = $(".wordList")[0].offsetTop;
            var classList = $(this)[0].classList[1];
            CurrentPage = classList
            console.log(classList);
            if (classList == "keyPage") {
                Pagepos = -keyPos
            } else if (classList == "sectPage") {
                Pagepos = -sectPos
            } else if (classList == "wordPage") {
                Pagepos = -wordPos
            }
            $(".slide-wrapper").css({
                "top": Pagepos + "px"
            });
        });
    } else if (mode == 2) {
        console.log("mode 2 fires", Pagepos, CurrentPage)
        setTimeout(() => {
            if (CurrentPage == "keyPage") {
                Pagepos = $(".keyList")[0].offsetTop;
            } else if (CurrentPage == "sectPage") {
                Pagepos = $(".sectionList")[0].offsetTop;
            } else if (CurrentPage == "wordPage") {
                Pagepos = $(".wordList")[0].offsetTop;
            }
        }, 1300);
        setTimeout(() => {
            console.log("new value - ", windowHeight, Pagepos)
            $(".slide-wrapper").css({
                "top": -Pagepos + "px"
            });
        }, 1500);
    }
}
contentSizing(1);
$(window).on('resize', function () {
    console.log(keyPos, sectPos, wordPos);
    contentSizing(2);
});

//Lookup Functions
var emptyNodes = function (selector) {
    $(selector).remove();
};

var sectionLookup = function () {
    $(".populate ul li").click(function () {
        $(".populateKeys ul li").remove();
        var kWord = $(this)[0].innerHTML;
        var pop = {
            '<>': 'li',
            'text': '${' + kWord + '}'
        }
        $(".searchBar")[0].value = kWord
        $('.populateKeys ul').json2html(sectLists, pop);
        emptyNodes(".populateKeys ul li:empty");
        $(".populateKeys ul li").each(function (n) {
            setTimeout(() => {
                $(this).css({
                    "opacity": "1",
                    "top": "15px"
                });
            }, 100 * n);
        });
        var windowHeight = $(window).outerHeight();
        var headHeight = $(".top-bar").outerHeight();
        var contentHeight = windowHeight - headHeight
        $(".slide-wrapper").css({
            "top": -contentHeight + "px"
        });

        var listHeight = $(".populateKeys ul").outerHeight();
        $(".keywordBox").css({
            "height": listHeight + 120
        });

        var sectionLength = $(".sectionList .populateKeys ul li").length;
        $(".keywordBox .sub-title.alt").html("There are " + sectionLength + " exclusion lists under this section")
    });
};

var listLookup = function () {
    $(".populateKeys ul li").click(function () {
        $(".wordList .populateWords ul li").remove();
        $(".wordList .key-title").removeClass("selected");
        $(this).addClass("selected");
        var kWord = $(this)[0].childNodes[0].textContent;
        console.log("list lookup", kWord);
        var pop = {
            '<>': 'li',
            'text': '${' + kWord + '}'
        }
        $('.wordList .populateWords ul').json2html(words, pop);
        emptyNodes(".wordList .populateWords ul li:empty");
        $(".wordList .populateWords ul li").each(function (n) {
            setTimeout(() => {
                $(this).css({
                    "opacity": "1",
                    "top": "15px"
                });
            }, 1 * n);
        });

        var windowHeight = $(window).outerHeight();
        var headHeight = $(".top-bar").outerHeight();
        var contentHeight = windowHeight - headHeight
        $(".slide-wrapper").css({
            "top": -contentHeight + "px"
        });

        var sectionLength = $(".wordList .populateWords ul li").length;
        $(".wordList .sub-title.alt").html("There are " + sectionLength + " words under this keyword list")
        var listHeight = $(".wordList .populateWords ul").outerHeight();
        $(".wordList .sectionBox").css({
            "height": listHeight + 115
        });
    });
};

//Section By Key
var dats;
$.getJSON("http://techops.inskinmedia.com/~dsofowote/keywordTool/pubfiles/src/sectionList.json", function (json) {
    dats = json;
    $(".keyList .key-title").click(function () {
        $(".keyList .populate ul li").remove();
        $(".keyList .key-title").removeClass("selected");
        $(this).addClass("selected");
        var kWord = $(this)[0].childNodes[0].textContent;
        console.log(kWord);
        var pop = {
            '<>': 'li',
            'text': '${' + kWord + '}',
        }
        $('.keyList .populate ul').json2html(dats, pop);
        emptyNodes(".keyList .populate ul li:empty");
        $(".keyList .populate ul li").each(function (n) {
            setTimeout(() => {
                $(this).css({
                    "opacity": "1",
                    "top": "15px"
                });
            }, 20 * n);
        });
        var sectionLength = $(".keyList .populate ul li").length;
        $(".keyList .sub-title.alt").html("There are " + sectionLength + " sections under this keyword list")
        sectionLookup();
        var listHeight = $(".keyList .populate ul").outerHeight();
        $(".keyList .sectionBox").css({
            "height": listHeight + 115
        });
    });
});

//Key list
var keyLists;
$.getJSON("http://techops.inskinmedia.com/~dsofowote/keywordTool/pubfiles/src/keyList.json", function (json) {
    keyLists = json;

    var keys = {
        '<>': 'div',
        'class': 'col-md-12 key-title',
        'text': '${List Name}',
        'html': [{
            '<>': 'span',
            'class': "keyLength",
            'text': '${File Length}',
            'html': [{
                '<>': 'span',
                'class': "scanType",
                'text': '${Scan Type}',
            }]
        }],
    }

    var keys2 = {
        '<>': 'div',
        'class': 'col-md-12 key-title',
        'text': '${List Name}',
        'html': [{
            '<>': 'span',
            'class': "scanType",
            'text': '${Scan Type}',
        }],
    }
    $('.keywordList').json2html(keyLists, keys);
    $('.keywordList-2').json2html(keyLists, keys);

    var fileLengthCategories = function () {
        $(".keyLength").each(function (n) {
            var length = $(this)[0].childNodes[0].textContent;
            if (length > 3000) {
                $(this).css({
                    "color": "#e93d3d",
                });
            } else if (length > 1000 && length < 3000) {
                $(this).css({
                    "color": "orange",
                });
            } else if (length <= 1000) {
                $(this).css({
                    "color": "#7edf7e",
                });
            }
        });
    }

    $(".key-title").each(function () {
        var name = $(this)[0].textContent;
        if (name.includes('kw')) {
            $(this).remove();
        }
    });
    fileLengthCategories();
});

//Key By Section
var sectLists;
$.getJSON("http://techops.inskinmedia.com/~dsofowote/keywordTool/pubfiles/src/sectList.json", function (json) {
    sectLists = json;

    $(".searchButton").click(function () {
        $(".populateKeys ul li").remove();
        var kWord = $(".searchBar")[0].value;
        var pop = {
            '<>': 'li',
            'text': '${' + kWord + '}'
        }
        $('.populateKeys ul').json2html(sectLists, pop);
        emptyNodes(".populateKeys ul li:empty");
        $(".populateKeys ul li").each(function (n) {
            setTimeout(() => {
                $(this).css({
                    "opacity": "1",
                    "top": "15px"
                });
            }, 10 * n);

        });
        listLookup();
        var sectionLength = $(".sectionList .populateKeys ul li").length;
        $(".keywordBox .sub-title.alt").html("There are " + sectionLength + " exclusion lists under this section")
        var listHeight = $(".populateKeys ul").outerHeight();
        $(".keywordBox").css({
            "height": listHeight + 100
        });
    });

});

//Word List
var words;
$.getJSON("http://techops.inskinmedia.com/~dsofowote/keywordTool/pubfiles/src/wordList.json", function (json) {
    words = json;
    $(".wordList .key-title").click(function () {
        $(".wordList .populateWords ul li").remove();
        $(".wordList .key-title").removeClass("selected");
        $(this).addClass("selected");
        var kWord = $(this)[0].childNodes[0].textContent;
        console.log(kWord);
        var pop = {
            '<>': 'li',
            'text': '${' + kWord + '}'
        }
        $('.wordList .populateWords ul').json2html(words, pop);
        emptyNodes(".wordList .populateWords ul li:empty");
        $(".wordList .populateWords ul li").each(function (n) {
            setTimeout(() => {
                $(this).css({
                    "opacity": "1",
                    "top": "15px"
                });
            }, 1 * n);
        });
        var sectionLength = $(".wordList .populateWords ul li").length;
        $(".wordList .sub-title.alt").html("There are " + sectionLength + " words under this keyword list")
        var listHeight = $(".wordList .populateWords ul").outerHeight();
        $(".wordList .sectionBox").css({
            "height": listHeight + 115
        });
    });
});