async function apiCall(url) {


    //add api call logic here
    try{
    let res = await fetch(url)
    let articles = await res.json()
    console.log(articles)
    return articles
    }
    catch(err){
        console.log(err)
    }
}


function appendArticles(articles, main) {

    //add append logic here
articles.forEach((e)=>{

    let div = document.createElement('div')
    div.id = "news"

    let title = document.createElement('p')
    title.id="title"
    title.innerText = e.title;

    let desc = document.createElement('p')
    desc.id = "desc"
    desc.innerText = e.description;

    let image = document.createElement("img")
    image.id = "image"
    image.src = e.urlToImage; 


    div.append(title,desc,image)
    div.onclick =()=>{
        localStorage.setItem("article",JSON.stringify(e));

        window.location.href = "news.html";
    }
    main.append(div)
})

}

export { apiCall, appendArticles }