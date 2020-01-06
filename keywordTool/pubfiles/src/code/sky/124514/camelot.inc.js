switch (document.location.href) {
    case 'http://www.skysports.com/football':
    case 'http://www.skysports.com/f1':
    case 'http://www.skysports.com/boxing':
    case 'http://www.skysports.com/football/news':
    case 'http://www.skysports.com/rugby-league':
        var camelotList = {
            sources: ['url', 'title', 'keywords'],
            keywords: {}
        }
        kwLists.push(camelotList);
        break;
    default:
        var camelotList = {
            sources: ['url', 'title', 'keywords', 'page'],
            keywords: {}
        }
        kwLists.push(camelotList);
        break;
}
