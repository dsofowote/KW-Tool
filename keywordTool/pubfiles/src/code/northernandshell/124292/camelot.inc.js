switch (document.location.href) {
    case 'http://www.express.co.uk/':
    case 'http://www.express.co.uk/news':
    case 'http://www.express.co.uk/news/uk':
    case 'http://www.express.co.uk/sport':
    case 'http://www.express.co.uk/sport/football':
    case 'http://www.express.co.uk/news/politics':
    case 'http://www.express.co.uk/showbiz':
    case 'http://www.express.co.uk/news/world':
    case 'http://www.express.co.uk/news/sunday':
    case 'https://www.express.co.uk/':
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
