//console.log("Hello");

//initialize the variables
const source = 'bbc-news';
const key = 'e843d2666378468c9506da70a118b46c';

//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a get request
const xhr = new XMLHttpRequest();

//create a get request
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + key, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                <b>Breaking News:${index + 1}</b> ${element["title"]}
            </button>
        </h2>
    </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body">${element["content"]}. <a href ="${element['url']}" target=_blank>Read more here</a></div>
            </div>
        </div>`

            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;


    }
    else {
        console.log("Some error occured")
    }
}


xhr.send()




//e843d2666378468c9506da70a118b46c
///http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e843d2666378468c9506da70a118b46c
